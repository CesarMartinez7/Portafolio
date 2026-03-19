import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";

const skills = {
  "Frontend": [
    { name: "angular-icon", label: "Angular 19", color: "#DD0031" },
    { name: "typescript-icon", label: "TypeScript", color: "#3178C6" },
    { name: "react", label: "React", color: "#61DAFB" },
    { name: "nextjs-icon", label: "Next.js", color: "#ffffff" },
    { name: "javascript", label: "JavaScript", color: "#F7DF1E" },
    { name: "tailwindcss-icon", label: "Tailwind", color: "#38B2AC" },
  ],
  "Backend & Data": [
    { name: "nodejs-icon", label: "Node.js", color: "#339933" },
    { name: "python", label: "Python", color: "#3776AB" },
    { name: "mysql-icon", label: "MySQL", color: "#4479A1" },
    { name: "postgresql", label: "PostgreSQL", color: "#336791" },
    { name: "supabase-icon", label: "Supabase", color: "#3ECF8E" },
  ],
  "Tooling": [
    { name: "git-icon", label: "Git", color: "#F05032" },
    { name: "docker-icon", label: "Docker", color: "#2496ED" },
    { name: "linux-tux", label: "Linux", color: "#FCC624" },
  ],
};

export default function Habilidades() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with daily and tools I rely on in production.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10">
          {Object.entries(skills).map(([category, tools], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                  {category}
                </span>
                <div className="flex-1 h-px bg-zinc-800/40" />
              </div>

              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="group relative flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all duration-200 cursor-default"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px -5px ${tool.color}40`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${tool.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                      (e.currentTarget as HTMLElement).style.borderColor = "";
                    }}
                  >
                    <Icon icon={`logos:${tool.name}`} width="22" height="22" />
                    <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors">
                      {tool.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}