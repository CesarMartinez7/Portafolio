import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Section from "./Section";
import { fadeUp } from "./utils";

const credentials = [
  {
    name: "Docker Essentials: A Developer Introduction",
    institution: "IBM",
    credentialURL: "https://www.ibm.com/certificates/IBM-67890",
    tags: ["Docker", "Containers", "Deployment"],
  },
  {
    name: "Técnico en Programación de Software",
    institution: "SENA — Servicio Nacional de Aprendizaje",
    credentialURL: "https://www.sena.edu.co",
    tags: ["Software Development", "Programming", "Tech"],
  },
  {
    name: "Introduction to Cybersecurity",
    institution: "Cisco Networking Academy",
    credentialURL: "https://www.cisco.com/certificates/CNA-11223",
    tags: ["Cybersecurity", "Networking", "Data Protection"],
  },
];

const exploring = [
  { name: "Supabase", icon: "logos:supabase-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
];

export default function Credenciales() {
  return (
    <Section
      id="credentials"
      index="03"
      label="Credentials"
      title="Credentials"
      outline="& Learning"
      aside={`${credentials.length} certifications`}
      description="Certifications and technologies I'm actively exploring."
    >
      <ul className="border-b border-white/15">
        {credentials.map((cert, i) => (
          <motion.li
            key={cert.name}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-t border-white/15"
          >
            <a
              href={cert.credentialURL}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid items-center gap-x-8 gap-y-3 py-8 transition-[padding] duration-300 hover:pl-3 md:grid-cols-[3rem_1fr_auto]"
            >
              <span className="font-mono text-xs text-emerald-400">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-xl font-bold uppercase leading-tight tracking-tight text-white transition-colors group-hover:text-emerald-400 md:text-3xl">
                  {cert.name}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
                  {cert.institution}
                </p>
              </div>

              <div className="flex items-center gap-5">
                <p className="font-mono text-xs text-zinc-500">
                  {cert.tags.join(" / ")}
                </p>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors group-hover:border-emerald-400 group-hover:bg-emerald-400 group-hover:text-zinc-950">
                  <Icon icon="tabler:arrow-up-right" width="18" height="18" />
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.div
        {...fadeUp}
        className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
      >
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-zinc-400">
          Currently exploring
        </p>
        <ul className="flex flex-wrap gap-2">
          {exploring.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-200"
            >
              <Icon icon={tech.icon} width="16" height="16" />
              {tech.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
