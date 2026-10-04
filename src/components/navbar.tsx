import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { navLinks, site } from "../data/site";
import { cn } from "./utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-30 border-b transition-colors duration-300",
        scrolled || open
          ? "border-white/5 bg-zinc-950/80 backdrop-blur-md"
          : "border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium text-white"
          onClick={() => setOpen(false)}
        >
          cesar<span className="text-emerald-400">.</span>martinez
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.cv}
            download
            className="flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-1.5 text-sm text-zinc-200 transition-colors hover:border-white/60 hover:text-white"
          >
            <Icon icon="tabler:download" width="15" height="15" />
            CV
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-full border border-white/25 p-2 text-zinc-300 md:hidden"
          >
            <Icon icon={open ? "tabler:x" : "tabler:menu-2"} width="18" height="18" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col border-t border-white/5 px-6 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-zinc-300"
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
