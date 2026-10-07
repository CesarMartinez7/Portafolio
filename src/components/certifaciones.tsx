import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Section from "./Section";
import { fadeUp } from "./utils";

interface Credential {
  name: string;
  institution: string;
  credentialURL?: string;
  tags: string[];
}

const credentials: Credential[] = [
  {
    name: "Angular Course",
    institution: "SoloLearn",
    tags: ["Angular", "Components", "Routing"],
  },
  {
    name: "Técnico en Programación de Software",
    institution: "SENA — Servicio Nacional de Aprendizaje",
    credentialURL: "https://www.sena.edu.co",
    tags: ["Software Development", "Programming", "Tech"],
  },
  {
    name: "Exploratory Data Analysis with Python",
    institution: "SENA — Servicio Nacional de Aprendizaje · 40 h",
    tags: ["Python", "Data Analysis", "EDA"],
  },
  {
    name: "English — Levels 3 to 9",
    institution: "SENA — Servicio Nacional de Aprendizaje · 40 h each",
    tags: ["3", "4", "5", "6", "7", "9"],
  },
  {
    name: "Docker Essentials: A Developer Introduction",
    institution: "IBM",
    credentialURL: "https://www.ibm.com/certificates/IBM-67890",
    tags: ["Docker", "Containers", "Deployment"],
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

// Fila de SoloLearn en pausa por ahora. Angular se movió arriba como tarjeta.
// const sololearn = [
//   { name: "Angular", icon: "logos:angular-icon" },
//   { name: "Python · Intermediate", icon: "logos:python" },
//   { name: "Python Developer", icon: "logos:python" },
//   { name: "JavaScript · Intro", icon: "logos:javascript" },
//   { name: "JavaScript · Intermediate", icon: "logos:javascript" },
// ];

const pillRows = [
  { label: "Currently exploring", items: exploring },
  // { label: "SoloLearn", items: sololearn },
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
      <ul className="border-b border-line">
        {credentials.map((cert, i) => {
          const hasLink = Boolean(cert.credentialURL);
          const Wrapper = hasLink ? "a" : "div";
          return (
            <motion.li
              key={cert.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-line"
            >
              <Wrapper
                {...(hasLink
                  ? {
                      href: cert.credentialURL,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className={`group grid items-center gap-x-8 gap-y-3 py-8 md:grid-cols-[3rem_1fr_auto] ${
                  hasLink ? "transition-[padding] duration-300 hover:pl-3" : ""
                }`}
              >
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3
                    className={`text-xl font-bold uppercase leading-tight tracking-tight text-fg md:text-3xl ${
                      hasLink ? "transition-colors group-hover:text-accent" : ""
                    }`}
                  >
                    {cert.name}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    {cert.institution}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <p className="font-mono text-xs text-subtle">
                    {cert.tags.join(" / ")}
                  </p>
                  {hasLink ? (
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line-2 text-fg transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                      <Icon icon="tabler:arrow-up-right" width="18" height="18" />
                    </span>
                  ) : (
                    <span
                      title="No verification link available"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-subtle"
                    >
                      <Icon icon="tabler:certificate" width="18" height="18" />
                    </span>
                  )}
                </div>
              </Wrapper>
            </motion.li>
          );
        })}
      </ul>

      <div className="mt-12 flex flex-col gap-8">
        {pillRows.map((row) => (
          <motion.div
            key={row.label}
            {...fadeUp}
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
          >
            <p className="w-40 shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {row.label}
            </p>
            <ul className="flex flex-wrap gap-2">
              {row.items.map((tech) => (
                <li
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 text-sm text-fg-soft"
                >
                  <Icon icon={tech.icon} width="16" height="16" />
                  {tech.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
