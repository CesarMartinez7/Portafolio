import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { site, socials } from "../data/site";
import BlindsBackdrop from "./BlindsBackdrop";
import SplitText from "./SplitText";
import RotatingText from "./RotationText";

const builds = [
  "insurance platforms",
  "API clients",
  "VS Code extensions",
  "browser extensions",
  "Telegram bots",
];

const facts = [
  { label: "Current role", value: "Frontend Developer Jr.", sub: "Red5G S.A.S" },
  { label: "Client", value: "Seguros Mundial", sub: "Insurance platform" },
  { label: "Stack", value: "Angular · TypeScript · Node.js", sub: "In production" },
  { label: "Experience", value: "1+ year", sub: "Mar 2025 – Present" },
];

const nameClass =
  "block font-bold uppercase leading-[0.92] tracking-tighter text-[clamp(3.25rem,16.5vw,11.25rem)]";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh flex-col overflow-hidden"
    >
      <BlindsBackdrop />

      {/* pointer-events-none para que el cursor llegue al canvas */}
      <div className="pointer-events-none mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-8 pt-28 md:pt-36">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-zinc-300"
        >
          <span>{site.role}</span>
          <span className="hidden sm:inline">{site.location}</span>
        </motion.p>

        <h1 className="sr-only">
          {site.name} — {site.role}
        </h1>
        <div aria-hidden="true" className="mt-10 text-white">
          <SplitText
            text="César"
            delay={60}
            rootMargin="0px"
            textAlign="left"
            className={nameClass}
          />
          <SplitText
            text="Martínez"
            delay={60}
            rootMargin="0px"
            textAlign="left"
            className={`${nameClass} text-outline-clear`}
          />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xl font-medium text-white md:text-2xl">
              I build
              <RotatingText
                texts={builds}
                rotationInterval={2400}
                staggerDuration={0.015}
                staggerFrom="last"
                mainClassName="overflow-hidden rounded-lg bg-emerald-400 px-3 py-1 text-zinc-950"
                splitLevelClassName="overflow-hidden"
              />
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-zinc-200 [text-shadow:0_1px_14px_rgba(0,0,0,0.9)]">
              Building scalable web applications with Angular, TypeScript and
              Node.js. 1+ year of professional experience working on real
              production systems for the insurance industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pointer-events-auto flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
            >
              View my work
              <Icon
                icon="tabler:arrow-down"
                width="16"
                height="16"
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={site.cv}
              download
              className="flex items-center gap-2 rounded-full border border-white/25 bg-zinc-950/40 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:border-white/60"
            >
              <Icon icon="tabler:download" width="16" height="16" />
              Download CV
            </a>
            <div className="flex items-center gap-1">
              {socials.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-full p-2.5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon icon={link.icon} width="20" height="20" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-auto pt-14">
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 gap-6 border-t border-white/15 pt-6 md:grid-cols-4"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-white">
                  {fact.value}
                  <span className="block text-xs font-normal text-zinc-400">
                    {fact.sub}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
