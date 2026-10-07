import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Section from "./Section";
import { cn, fadeUp } from "./utils";

const experiences = [
  {
    company: "Red5G S.A.S",
    role: "Frontend Developer Jr.",
    client: "Seguros Mundial",
    period: "Sep 2025 – Present",
    tag: "Full-time · Promoted",
    current: true,
    description:
      "Promoted to full-time employee after demonstrating strong performance during internship. Continued leading frontend development for Seguros Mundial's insurance platform.",
    achievements: [
      "Architected scalable module structure for a legacy project not originally designed for growth.",
      "Proposed and shipped new features and workflows adopted by the team.",
      "Maintained and extended integrations with Seguros Mundial, Banco Unión, Allianz, and Seguros del Estado.",
      "Developed production-ready insurance quoting products handling real client data.",
    ],
    stack: ["Angular", "TypeScript", "Node.js", "REST APIs"],
  },
  {
    company: "Red5G S.A.S",
    role: "Frontend Developer Intern",
    client: "Seguros Mundial",
    period: "Mar 2025 – Sep 2025",
    tag: "Internship",
    current: false,
    description:
      "Joined as an intern and quickly took ownership of critical frontend modules. Performance during this period led to a full-time offer within 6 months.",
    achievements: [
      "Built insurance quoting products from scratch for Seguros Mundial.",
      "Identified scalability issues in the existing codebase and proposed architectural improvements.",
      "Integrated with third-party financial APIs including Banco Unión and Allianz.",
      "Took initiative on features beyond the scope of the internship role.",
    ],
    stack: ["Angular", "TypeScript", "Node.js", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      index="01"
      label="Experience"
      title="Work"
      outline="Experience"
      aside="Mar 2025 – Present"
      description="From intern to full-time in six months, shipping frontend for an insurance platform used in production."
    >
      <ol>
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.period}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="grid gap-5 border-t border-line py-10 md:grid-cols-[200px_1fr] md:gap-10 md:py-14"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {exp.period}
              </p>
              <span
                className={cn(
                  "mt-4 inline-block rounded-md px-2.5 py-1 text-xs font-medium",
                  exp.current
                    ? "bg-accent text-bg"
                    : "border border-line-2 text-fg-soft",
                )}
              >
                {exp.tag}
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-bold uppercase leading-none tracking-tighter text-fg md:text-5xl">
                {exp.role}
              </h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span className="text-fg">{exp.company}</span> / Client:{" "}
                {exp.client}
              </p>

              <p className="mt-7 max-w-2xl leading-relaxed text-muted">
                {exp.description}
              </p>

              <ul className="mt-6 space-y-3">
                {exp.achievements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-fg-soft"
                  >
                    <Icon
                      icon="tabler:arrow-right"
                      className="mt-0.5 shrink-0 text-accent"
                      width="16"
                      height="16"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line-2 px-3.5 py-1.5 font-mono text-xs text-fg-soft"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
