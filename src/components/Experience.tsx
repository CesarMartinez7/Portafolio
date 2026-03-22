import { motion } from "motion/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const experiences = [
  {
    company: "Red5G S.A.S",
    role: "Frontend Developer Jr.",
    client: "Seguros Mundial",
    period: "Sep 2025 – Present",
    tag: "Full-time · Promoted",
    tagColor: "emerald",
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
    tagColor: "zinc",
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
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Work </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
              Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional experience building real products for real clients.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800/40 ml-5 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative sm:pl-16"
              >
                <div className={`absolute left-0 top-8 w-3 h-3 rounded-full border-2 hidden sm:block ${
                  i === 0 ? "bg-emerald-500 border-emerald-400" : "bg-zinc-700 border-zinc-600"
                }`} style={{ marginLeft: "14px" }} />

                <div className="relative border border-zinc-800 rounded-2xl p-8 bg-zinc-950/60 backdrop-blur-sm">
                  <div className="absolute -top-3 left-6">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                      exp.tagColor === "emerald"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-zinc-800 border-zinc-700 text-zinc-400"
                    }`}>
                      {exp.tag}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-emerald-400 font-mono text-sm">{exp.company}</span>
                        <span className="text-zinc-600 text-xs">·</span>
                        <span className="text-zinc-500 text-sm">Client: {exp.client}</span>
                      </div>
                    </div>
                    <span className="text-gray-500 font-mono text-sm whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 mt-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((item, j) => (
                      <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <Icon icon="tabler:arrow-right" className="text-emerald-500 mt-0.5 shrink-0" width="16" height="16" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}