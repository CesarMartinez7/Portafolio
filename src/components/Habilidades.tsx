import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Section from "./Section";
import { fadeUp } from "./utils";

// demonstrable: usado en producción (Seguros Mundial) o en un proyecto propio publicado — ver Experience y Projects.
const skills = {
  Frontend: [
    { name: "angular-icon", label: "Angular", demonstrable: true },
    { name: "typescript-icon", label: "TypeScript", demonstrable: true },
    { name: "react", label: "React", demonstrable: true },
    { name: "nextjs-icon", label: "Next.js", demonstrable: false },
    { name: "javascript", label: "JavaScript", demonstrable: true },
    { name: "tailwindcss-icon", label: "Tailwind", demonstrable: true },
  ],
  "Backend & Data": [
    { name: "nodejs-icon", label: "Node.js", demonstrable: true },
    { name: "python", label: "Python", demonstrable: true },
    { name: "mysql-icon", label: "MySQL", demonstrable: false },
    { name: "postgresql", label: "PostgreSQL", demonstrable: false },
    { name: "supabase-icon", label: "Supabase", demonstrable: true },
  ],
  Tooling: [
    { name: "git-icon", label: "Git", demonstrable: true },
    { name: "docker-icon", label: "Docker", demonstrable: true },
    { name: "linux-tux", label: "Linux", demonstrable: false },
  ],
};

export default function Habilidades() {
  return (
    <Section
      id="skills"
      index="04"
      label="Skills"
      title="Technical"
      outline="Skills"
      aside={`${Object.values(skills).flat().length} technologies`}
      description="Technologies I work with daily and tools I rely on in production. Marked with a dot are demonstrable — shipped in production for Seguros Mundial or in a published project of mine, not just listed."
    >
      <div className="border-b border-line">
        {Object.entries(skills).map(([category, tools], catIdx) => (
          <motion.div
            key={category}
            {...fadeUp}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            className="grid gap-5 border-t border-line py-10 md:grid-cols-[200px_1fr] md:gap-10"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted md:pt-3">
              <span className="text-accent">
                {String(catIdx + 1).padStart(2, "0")}
              </span>{" "}
              / {category}
            </h3>
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="group flex cursor-default items-center gap-3"
                  title={
                    tool.demonstrable
                      ? "Demonstrable — used in production or a shipped project"
                      : undefined
                  }
                >
                  <Icon
                    icon={`logos:${tool.name}`}
                    className="h-5 w-5 opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-7 md:w-7"
                  />
                  <span className="text-outline-thin text-3xl font-bold uppercase tracking-tighter md:text-5xl">
                    {tool.label}
                  </span>
                  {tool.demonstrable && (
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
