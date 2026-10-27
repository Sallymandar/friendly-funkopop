import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import type { ExclusiveKind, Finish, Production } from "@/data/catalog";
import { btnAmber, field, PageHeader } from "@/components/bits";
import { useShelf } from "@/lib/shelf";

export const Route = createFileRoute("/add")({ component: AddPage });

const finishes: Finish[] = ["matte", "metallic", "flocked", "glow", "chrome"];
const exclusives: ExclusiveKind[] = ["none", "retailer", "convention", "shared"];
const productions: Production[] = ["Vaulted", "In production", "Retired"];

const paint: Record<Finish, { head: string; body: string; accent: string }> = {
  matte: { head: "#c4b49a", body: "#8a8070", accent: "#e4a322" },
  metallic: { head: "#d5d8df", body: "#9aa0a8", accent: "#e4a322" },
  flocked: { head: "#e6d3a1", body: "#c4b49a", accent: "#8a5a3a" },
  glow: { head: "#d8ffb0", body: "#7dcc6a", accent: "#f4fff0" },
  chrome: { head: "#e6c56b", body: "#c6a15a", accent: "#f3ead7" },
};

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "figure";
}

function AddPage() {
  const navigate = useNavigate();
  const addCustom = useShelf((s) => s.addCustom);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [variant, setVariant] = useState("Standard");
  const [character, setCharacter] = useState("");
  const [series, setSeries] = useState("");
  const [license, setLicense] = useState("");
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [finish, setFinish] = useState<Finish>("matte");
  const [exclusiveKind, setExclusiveKind] = useState<ExclusiveKind>("none");
  const [retailer, setRetailer] = useState("");
  const [convention, setConvention] = useState("");
  const [sticker, setSticker] = useState("");
  const [edition, setEdition] = useState("");
  const [chase, setChase] = useState(false);
  const [ratio, setRatio] = useState("");
  const [upc, setUpc] = useState("");
  const [country, setCountry] = useState("United States");
  const [msrp, setMsrp] = useState("11.99");
  const [production, setProduction] = useState<Production>("Vaulted");
  const [size, setSize] = useState("Standard");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  function save() {
    if (!name.trim() || !number.trim()) {
      setError("Name and box number are required.");
      return;
    }
    const who = character.trim() || name.trim();
    const line = series.trim() || "Custom";
    const id = `C${Date.now().toString(36)}`;
    addCustom({
      id,
      number: number.trim(),
      name: name.trim(),
      character: who,
      characterKey: slug(who),
      series: line,
      line: "Pop!",
      license: license.trim() || "Unknown",
      year: Number(year) || new Date().getFullYear(),
      country: country.trim() || "Unknown",
      familyId: `${slug(line)}-${number.trim().replace(/\s+/g, "")}`,
      variant: variant.trim() || "Standard",
      isChase: chase,
      chaseRatio: chase ? ratio.trim() || undefined : undefined,
      exclusiveKind,
      retailer: retailer.trim() || undefined,
      convention: convention.trim() || undefined,
      editionSize: edition.trim() ? Number(edition) : undefined,
      sticker: sticker.trim() || undefined,
      upc: upc.trim() || undefined,
      msrp: Number(msrp) || 0,
      production,
      finish,
      size: size.trim() || "Standard",
      palette: paint[finish],
      notes: notes.trim() || "Added by you. Not from a price feed.",
      sales: [],
    });
    void navigate({ to: "/record/$id", params: { id } });
  }

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        kicker="Catalog"
        title="Add a figure"
        lede="The starter ledger is not every Pop in circulation. Add the one in your hand. Same line and box number will link as variants. Price it afterward by logging a sale."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Product name" value={name} onChange={setName} />
        <Field label="Box number" value={number} onChange={setNumber} placeholder="239" />
        <Field label="Variant" value={variant} onChange={setVariant} />
        <Field label="Character" value={character} onChange={setCharacter} />
        <Field label="Series" value={series} onChange={setSeries} placeholder="Movies" />
        <Field label="License" value={license} onChange={setLicense} />
        <Field label="Release year" value={year} onChange={setYear} />
        <Field label="Country" value={country} onChange={setCountry} />
        <label className="text-sm text-mute">
          Finish
          <select className={`${field} mt-1`} value={finish} onChange={(e) => setFinish(e.target.value as Finish)}>
            {finishes.map((f) => <option key={f}>{f}</option>)}
          </select>
        </label>
        <label className="text-sm text-mute">
          Exclusive type
          <select className={`${field} mt-1`} value={exclusiveKind} onChange={(e) => setExclusiveKind(e.target.value as ExclusiveKind)}>
            {exclusives.map((f) => <option key={f}>{f}</option>)}
          </select>
        </label>
        <Field label="Exclusive retailer" value={retailer} onChange={setRetailer} />
        <Field label="Convention" value={convention} onChange={setConvention} />
        <Field label="Sticker" value={sticker} onChange={setSticker} />
        <Field label="Edition size" value={edition} onChange={setEdition} placeholder="480" />
        <Field label="UPC" value={upc} onChange={setUpc} />
        <Field label="Original retail" value={msrp} onChange={setMsrp} />
        <Field label="Size" value={size} onChange={setSize} />
        <label className="text-sm text-mute">
          Production
          <select className={`${field} mt-1`} value={production} onChange={(e) => setProduction(e.target.value as Production)}>
            {productions.map((f) => <option key={f}>{f}</option>)}
          </select>
        </label>
        <label className="flex min-h-11 items-center gap-3 sm:col-span-2">
          <input type="checkbox" checked={chase} onChange={(e) => setChase(e.target.checked)} />
          Chase
        </label>
        {chase && <Field label="Chase ratio" value={ratio} onChange={setRatio} placeholder="1/6" />}
        <label className="text-sm text-mute sm:col-span-2">
          Notes
          <textarea className={`${field} mt-1 min-h-24 py-2`} value={notes} onChange={(e) => setNotes(e.target.value)} />
        </label>
      </div>
      {error && <p className="text-sm text-dim">{error}</p>}
      <button type="button" className={`${btnAmber} self-start`} onClick={save}>Save figure</button>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="text-sm text-mute">
      {label}
      <input className={`${field} mt-1`} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
