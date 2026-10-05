import { motion } from "motion/react";
import { fadeUp } from "./utils";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: string;
  // Segunda línea del título, en contorno
  outline: string;
  aside?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  index,
  label,
  title,
  outline,
  aside,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.header {...fadeUp} className="mb-14 md:mb-20">
          <p className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            <span>
              <span className="text-emerald-400">{index}</span> / {label}
            </span>
            {aside && <span className="hidden sm:inline">{aside}</span>}
          </p>
          <h2 className="mt-8 text-[clamp(2.6rem,11vw,7.5rem)] font-bold uppercase leading-[0.92] tracking-tighter text-white">
            <span className="block">{title}</span>
            <span className="text-outline block">{outline}</span>
          </h2>
          {description && (
            <p className="mt-8 max-w-xl leading-relaxed text-zinc-400">
              {description}
            </p>
          )}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
