import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { navLinks, site } from "../data/site";
import { cn } from "./utils";

function getInitialTheme(): "dark" | "light" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* el modo privado puede bloquear localStorage */
    }
  };

  // Al inicio (sobre el hero oscuro) la barra es clara; al bajar usa tokens.
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 border-b transition-colors duration-300",
        solid
          ? "border-line bg-surface/80 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className={cn(
            "flex items-center gap-2 font-mono text-sm font-medium",
            solid ? "text-fg" : "text-white",
          )}
          onClick={() => setOpen(false)}
        >
          <img src="/cesar-icono.svg" alt="" className="h-6 w-6" />
          cesar<span className="text-accent">.</span>martinez
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  solid
                    ? "text-muted hover:text-fg"
                    : "text-zinc-300 hover:text-white",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
            className={cn(
              "rounded-full border p-2 transition-colors",
              solid
                ? "border-line-2 text-fg-soft hover:border-fg hover:text-fg"
                : "border-white/25 text-zinc-200 hover:border-white/60 hover:text-white",
            )}
          >
            <Icon
              icon={theme === "dark" ? "tabler:sun" : "tabler:moon"}
              width="17"
              height="17"
            />
          </button>

          <a
            href={site.cv}
            download
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors",
              solid
                ? "border-line-2 text-fg-soft hover:border-fg hover:text-fg"
                : "border-white/25 text-zinc-200 hover:border-white/60 hover:text-white",
            )}
          >
            <Icon icon="tabler:download" width="15" height="15" />
            CV
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className={cn(
              "rounded-full border p-2 md:hidden",
              solid
                ? "border-line-2 text-fg-soft"
                : "border-white/25 text-zinc-300",
            )}
          >
            <Icon icon={open ? "tabler:x" : "tabler:menu-2"} width="18" height="18" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col border-t border-line px-6 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-fg-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
