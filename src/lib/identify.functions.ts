import { createServerFn } from "@tanstack/react-start";
import { figures } from "@/data/catalog";

export type PhotoMatch = {
  id: string;
  confidence: "high" | "medium" | "low";
  because: string;
};

export const matchPhoto = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    const image = data && typeof data === "object" && "image" in data ? (data as { image: unknown }).image : "";
    if (typeof image !== "string" || !image.startsWith("data:image/")) {
      throw new Error("Need a JPEG or PNG.");
    }
    if (image.length > 500_000) throw new Error("That photo is too large. Try a closer crop.");
    return { image };
  })
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "Photo match isn’t available right now. Use the questions below." };

    const index = figures
      .map(
        (f) =>
          `${f.id} | #${f.number} ${f.name} | ${f.variant} | ${f.series} | ${f.year} | ${f.finish} | ${f.sticker ?? "no sticker"} | ${f.exclusiveKind}${f.retailer ? " " + f.retailer : ""}${f.convention ? " " + f.convention : ""}`,
      )
      .join("\n");

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 350,
        messages: [
          {
            role: "system",
            content:
              "You match a photo of a vinyl collectible to a closed ledger. Only use ids from the ledger. Never invent a figure. If nothing fits, return an empty list. Reply with JSON only: {\"matches\":[{\"id\":\"F000001\",\"confidence\":\"high|medium|low\",\"because\":\"short reason\"}]}. At most 3 matches, best first.",
          },
          {
            role: "user",
            content: [
              { type: "text", text: `Ledger:\n${index}\n\nWhich ledger rows could this photo be?` },
              { type: "image_url", image_url: { url: data.image, detail: "low" } },
            ],
          },
        ],
      }),
    });

    if (!res.ok) return { ok: false as const, error: `Photo match failed (${res.status}). Try the questions below.` };

    const body = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const text = body.choices?.[0]?.message?.content ?? "";
    const raw = text.match(/\{[\s\S]*\}/)?.[0];
    if (!raw) return { ok: false as const, error: "No match came back. Try the questions below." };

    try {
      const parsed = JSON.parse(raw) as { matches?: { id?: string; confidence?: string; because?: string }[] };
      const known = new Set(figures.map((f) => f.id));
      const matches: PhotoMatch[] = (parsed.matches ?? [])
        .filter((m) => m.id && known.has(m.id))
        .slice(0, 3)
        .map((m) => ({
          id: m.id!,
          confidence: m.confidence === "high" || m.confidence === "medium" ? m.confidence : "low",
          because: (m.because ?? "").slice(0, 180),
        }));
      return { ok: true as const, matches };
    } catch {
      return { ok: false as const, error: "Couldn’t read the match. Try the questions below." };
    }
  });
