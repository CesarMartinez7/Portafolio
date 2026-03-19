import { motion } from "motion/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const credentials = [
  {
    name: "Docker Essentials: A Developer Introduction",
    institution: "IBM",
    icon: "logos:ibm",
    credentialURL: "https://www.ibm.com/certificates/IBM-67890",
    tags: ["Docker", "Containers", "Deployment"],
    color: "hover:border-blue-500/40",
    glow: "#3178C6",
    badge: "bg-blue-500/10 text-blue-400",
  },
  {
    name: "Introduction to Cybersecurity",
    institution: "Cisco Networking Academy",
    icon: "logos:cisco",
    credentialURL: "https://www.cisco.com/certificates/CNA-11223",
    tags: ["Cybersecurity", "Networking", "Data Protection"],
    color: "hover:border-cyan-500/40",
    glow: "#06b6d4",
    badge: "bg-cyan-500/10 text-cyan-400",
  },
];

const exploring = [
  { name: "Supabase", icon: "logos:supabase-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
];

export default function Credenciales() {
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
            <span className="text-white">Credentials & </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
              Learning
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Verified certifications and technologies I'm actively exploring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {credentials.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className={`group flex flex-col gap-4 p-6 rounded-2xl bg-zinc-950 border border-zinc-800 transition-all duration-300 ${cert.color}`}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px -6px ${cert.glow}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                  <Icon icon={cert.icon} width="28" height="28" />
                </div>
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${cert.badge}`}>
                  Verified
                </span>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-zinc-500 text-xs">{cert.institution}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-zinc-600 group-hover:text-zinc-400 transition-colors text-xs">
                <Icon icon="tabler:external-link" width="12" height="12" />
                View credential
              </div>
            </motion.a>
          ))}
        </div>

        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-6 text-center">
          Currently exploring
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {exploring.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all"
            >
              <Icon icon={tech.icon} width="18" height="18" />
              <span className="text-sm text-zinc-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}