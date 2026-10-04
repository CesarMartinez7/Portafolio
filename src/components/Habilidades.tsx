import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Section from "./Section";
import { fadeUp } from "./utils";

const skills = {
  Frontend: [
    { name: "angular-icon", label: "Angular 19" },
    { name: "typescript-icon", label: "TypeScript" },
    { name: "react", label: "React" },
    { name: "nextjs-icon", label: "Next.js" },
    { name: "javascript", label: "JavaScript" },
    { name: "tailwindcss-icon", label: "Tailwind" },
  ],
  "Backend & Data": [
    { name: "nodejs-icon", label: "Node.js" },
    { name: "python", label: "Python" },
    { name: "mysql-icon", label: "MySQL" },
    { name: "postgresql", label: "PostgreSQL" },
    { name: "supabase-icon", label: "Supabase" },
  ],
  Tooling: [
    { name: "git-icon", label: "Git" },
    { name: "docker-icon", label: "Docker" },
    { name: "linux-tux", label: "Linux" },
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
      description="Technologies I work with daily and tools I rely on in production."
    >
      <div className="border-b border-white/15">
        {Object.entries(skills).map(([category, tools], catIdx) => (
          <motion.div
            key={category}
            {...fadeUp}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            className="grid gap-5 border-t border-white/15 py-10 md:grid-cols-[200px_1fr] md:gap-10"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-400 md:pt-3">
              <span className="text-emerald-400">
                {String(catIdx + 1).padStart(2, "0")}
              </span>{" "}
              / {category}
            </h3>
            <ul className="flex flex-wrap gap-x-7 gap-y-2">
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="group flex cursor-default items-center gap-3"
                >
                  <Icon
                    icon={`logos:${tool.name}`}
                    className="h-5 w-5 opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-7 md:w-7"
                  />
                  <span className="text-outline-thin text-3xl font-bold uppercase tracking-tighter md:text-5xl">
                    {tool.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
