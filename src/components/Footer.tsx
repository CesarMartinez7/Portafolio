import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { site, socials } from "../data/site";
import BlindsBackdrop from "./BlindsBackdrop";
import { fadeUp } from "./utils";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-bg px-6 pt-24 text-fg-soft md:pt-32"
    >
      <BlindsBackdrop angle={-18} />

      {/* pointer-events-none para que el cursor llegue al canvas */}
      <div className="pointer-events-none mx-auto max-w-5xl">
        <motion.div {...fadeUp}>
          <p className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted">
            <span>
              <span className="text-accent">05</span> / Contact
            </span>
            <span className="hidden sm:inline">{site.location}</span>
          </p>
          <h2 className="mt-8 text-[clamp(2.6rem,12.5vw,9rem)] font-bold uppercase leading-[0.92] tracking-tighter text-fg">
            <span className="block">Let's build</span>
            <span className="text-outline block">Together</span>
          </h2>
          <p className="mt-8 max-w-xl leading-relaxed text-fg-soft">
            Open to new opportunities and interesting projects.
          </p>

          <div className="pointer-events-auto mt-9 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              <Icon icon="tabler:mail" width="18" height="18" />
              {site.email}
            </a>
            <a
              href={site.cv}
              download
              className="flex items-center gap-2 rounded-full border border-line-2 bg-bg/40 px-6 py-3 text-sm font-medium text-fg backdrop-blur-sm transition-colors hover:border-fg"
            >
              <Icon icon="tabler:download" width="18" height="18" />
              Download CV
            </a>
          </div>
        </motion.div>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-line py-8 sm:flex-row md:mt-32">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
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
                className="rounded-full p-2.5 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
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
