import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { site, socials } from "../data/site";
import BlindsBackdrop from "./BlindsBackdrop";
import { fadeUp } from "./utils";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden px-6 pt-24 md:pt-32"
    >
      <BlindsBackdrop angle={-18} />

      {/* pointer-events-none para que el cursor llegue al canvas */}
      <div className="pointer-events-none mx-auto max-w-5xl">
        <motion.div {...fadeUp}>
          <p className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-zinc-300">
            <span>
              <span className="text-emerald-400">05</span> / Contact
            </span>
            <span className="hidden sm:inline">{site.location}</span>
          </p>
          <h2 className="mt-8 text-[clamp(2.6rem,12.5vw,9rem)] font-bold uppercase leading-[0.92] tracking-tighter text-white">
            <span className="block">Let's build</span>
            <span className="text-outline block">Together</span>
          </h2>
          <p className="mt-8 max-w-xl leading-relaxed text-zinc-200 [text-shadow:0_1px_14px_rgba(0,0,0,0.9)]">
            Open to new opportunities and interesting projects.
          </p>

          <div className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
            >
              <Icon icon="tabler:mail" width="18" height="18" />
              {site.email}
            </a>
            <a
              href={site.cv}
              download
              className="flex items-center gap-2 rounded-full border border-white/25 bg-zinc-950/40 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/60"
            >
              <Icon icon="tabler:download" width="18" height="18" />
              Download CV
            </a>
          </div>
        </motion.div>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-white/15 py-8 sm:flex-row md:mt-32">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="pointer-events-auto flex items-center gap-1">
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="rounded-full p-2.5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon icon={link.icon} width="18" height="18" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
