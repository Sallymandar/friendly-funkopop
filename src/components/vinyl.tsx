import { useId } from "react";
import type { Figure } from "@/data/catalog";

export type PlateAngle = "front" | "back" | "side" | "bottom" | "sticker" | "barcode";

export function VinylPlate({
  figure,
  angle = "front",
  large = false,
}: {
  figure: Figure;
  angle?: PlateAngle;
  large?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const { head, body, accent } = figure.palette;
  const metal = figure.finish === "metallic" || figure.finish === "chrome";
  const showFace = angle === "front" || angle === "side";
  const shift = angle === "side" ? 26 : 0;

  return (
    <div className={`flex flex-col rounded-2xl border border-line bg-panel-2 ${large ? "p-4" : "p-3"}`}>
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-display text-lg tabular-nums text-paper">#{figure.number}</span>
        <span className="text-sm text-mute">{figure.finish}</span>
      </div>
      <div className={`relative ${large ? "mt-2 h-64" : "mt-1 h-36"}`}>
        {angle === "sticker" ? (
          <Sticker figure={figure} />
        ) : angle === "barcode" ? (
          <Barcode id={figure.id} />
        ) : angle === "bottom" ? (
          <BottomStamp figure={figure} />
        ) : (
          <svg viewBox="0 0 200 220" className="h-full w-full" role="img" aria-label={`${figure.name} ${figure.variant} paint plate`}>
            <defs>
              <linearGradient id={`${uid}-m`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
                <stop offset="0.45" stopColor="#fff" stopOpacity="0" />
                <stop offset="1" stopColor="#000" stopOpacity="0.25" />
              </linearGradient>
              <pattern id={`${uid}-f`} width="6" height="6" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1" fill="#1a1406" opacity="0.28" />
              </pattern>
            </defs>
            <ellipse cx={100 + shift} cy="206" rx="42" ry="7" fill="#000" opacity="0.35" />
            <g transform={`translate(${shift} 0)`}>
              <rect x="62" y="128" width="16" height="40" rx="8" fill={body} />
              {angle !== "side" && <rect x="122" y="128" width="16" height="40" rx="8" fill={body} />}
              <rect x="80" y="122" width="40" height="62" rx="16" fill={body} />
              <circle cx="100" cy="146" r="5" fill={accent} />
              <circle cx="100" cy="74" r="46" fill={head} />
              {figure.finish === "glow" && (
                <circle cx="100" cy="74" r="52" fill="none" stroke={accent} strokeWidth="6" opacity="0.45" />
              )}
              {showFace && (
                <>
                  <circle cx="84" cy="74" r="6" fill="#f3ead7" />
                  <circle cx="116" cy="74" r="6" fill="#f3ead7" />
                </>
              )}
              {metal && <circle cx="100" cy="74" r="46" fill={`url(#${uid}-m)`} />}
              {figure.finish === "flocked" && <circle cx="100" cy="74" r="46" fill={`url(#${uid}-f)`} />}
              {figure.finish === "flocked" && <rect x="80" y="122" width="40" height="62" rx="16" fill={`url(#${uid}-f)`} />}
            </g>
          </svg>
        )}
      </div>
      <p className="mt-1 truncate text-sm text-dim">{figure.variant}</p>
    </div>
  );
}

function Sticker({ figure }: { figure: Figure }) {
  const text = figure.sticker ?? "No special sticker";
  return (
    <div className="flex h-full items-center justify-center">
      <div className="max-w-[90%] rounded-lg border-2 border-dashed border-amber bg-ink px-4 py-5 text-center">
        <p className="text-xs text-mute">Sticker</p>
        <p className="mt-1 font-display text-xl text-paper">{text}</p>
      </div>
    </div>
  );
}

function BottomStamp({ figure }: { figure: Figure }) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="h-16 w-28 rounded-[100%] border border-line bg-ink" />
      <p className="mt-3 font-display text-lg tabular-nums">#{figure.number}</p>
      <p className="text-sm text-mute">{figure.production}</p>
    </div>
  );
}

function Barcode({ id }: { id: string }) {
  const bars = Array.from(id).flatMap((ch, i) => {
    const n = ch.charCodeAt(0);
    return [n % 3 === 0, n % 2 === 0, i % 2 === 0];
  });
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2">
      <div className="flex h-16 items-end gap-px" aria-hidden>
        {bars.map((on, i) => (
          <span key={i} className={`w-1 ${on ? "h-16 bg-paper" : "h-10 bg-dim"}`} />
        ))}
      </div>
      <p className="text-sm text-mute">UPC not on file</p>
    </div>
  );
}
