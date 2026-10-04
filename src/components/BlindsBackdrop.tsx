import { lazy, Suspense } from "react";

// WebGL (ogl) fuera del bundle inicial
const GradientBlinds = lazy(() => import("./gradient-blinds"));

// Persianas con foco que sigue al cursor; el contenido encima debe ser
// pointer-events-none para que el cursor llegue al canvas
export default function BlindsBackdrop({ angle = 18 }: { angle?: number }) {
  return (
    <>
      <div className="absolute inset-0 -z-20">
        <Suspense fallback={null}>
          <GradientBlinds
            gradientColors={["#022c22", "#10b981", "#34d399", "#047857"]}
            angle={angle}
            noise={0.35}
            blindCount={14}
            blindMinWidth={70}
            spotlightRadius={0.55}
            spotlightSoftness={1.1}
            spotlightOpacity={0.6}
            mouseDampening={0.2}
            distortAmount={4}
            mixBlendMode="normal"
          />
        </Suspense>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950/70 via-zinc-950/20 to-zinc-950" />
    </>
  );
}
