import { lazy, Suspense, useEffect, useState } from "react";

// WebGL (ogl) fuera del bundle inicial
const GradientBlinds = lazy(() => import("./gradient-blinds"));

// Los colores del shader no pueden leer variables CSS, así que elegimos la
// paleta según el tema activo y reaccionamos al cambio con un observer.
const PALETTE: Record<"dark" | "light", string[]> = {
  dark: ["#022c22", "#10b981", "#34d399", "#047857"],
  // Tonos muy claros: el shader resta franjas y en claro los valles se irían
  // a negro con verdes saturados, así que partimos de verdes pastel.
  light: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7"],
};

function useThemeName(): "dark" | "light" {
  const read = () =>
    typeof document !== "undefined" &&
    document.documentElement.dataset.theme === "light"
      ? "light"
      : "dark";
  const [theme, setTheme] = useState<"dark" | "light">(read);

  useEffect(() => {
    const el = document.documentElement;
    const obs = new MutationObserver(() => setTheme(read()));
    obs.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  return theme;
}

// Persianas con foco que sigue al cursor; el contenido encima debe ser
// pointer-events-none para que el cursor llegue al canvas
export default function BlindsBackdrop({ angle = 18 }: { angle?: number }) {
  const theme = useThemeName();

  return (
    <>
      <div className="absolute inset-0 -z-20">
        <Suspense fallback={null}>
          <GradientBlinds
            gradientColors={PALETTE[theme]}
            angle={angle}
            noise={0.35}
            blindCount={14}
            blindMinWidth={70}
            spotlightRadius={0.55}
            spotlightSoftness={1.1}
            spotlightOpacity={theme === "light" ? 0.28 : 0.6}
            mouseDampening={0.2}
            distortAmount={4}
            mixBlendMode="normal"
          />
        </Suspense>
      </div>
      {/* El velo se funde hacia el fondo del tema. En claro es más fuerte para
          levantar las bandas oscuras del shader y que todo quede claro. */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b ${
          theme === "light"
            ? "from-bg/75 via-bg/55 to-bg"
            : "from-bg/70 via-bg/20 to-bg"
        }`}
      />
    </>
  );
}
