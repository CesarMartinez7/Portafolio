//@ts-nocheck
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./utils/useOutside";
import { Icon } from "@iconify/react/dist/iconify.js";
import ImageNofound from "../../public/nofoundimage.webp";

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div className="w-full">
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            />
            <div className="fixed inset-0 grid place-items-center z-50 p-4">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-all z-50"
              >
                <Icon icon="tabler:x" width="18" height="18" />
              </motion.button>

              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
              >
                <motion.div layoutId={`img-${active.title}-${id}`} className="relative h-64 overflow-hidden">
                  <img
                    src={active.src?.length > 0 ? active.src : ImageNofound}
                    alt={active.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-mono px-3 py-1 rounded-full border backdrop-blur-sm ${
                      active.status
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                    }`}>
                      {active.status ? "● Live" : "◌ In progress"}
                    </span>
                  </div>
                </motion.div>

                <div className="flex flex-col gap-4 p-6 overflow-y-auto">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <motion.h3 layoutId={`title-${active.title}-${id}`} className="text-2xl font-bold text-white mb-1">
                        {active.title}
                      </motion.h3>
                      <p className="text-zinc-400 text-sm">{active.description}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <a href={active.ctaLinkCode} target="_blank"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-lg transition-all">
                        <Icon icon="tabler:brand-github" width="15" height="15" />
                        Code
                      </a>
                      <a href={active.ctaLink} target="_blank"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all">
                        <Icon icon="tabler:external-link" width="15" height="15" />
                        {active.ctaText}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {active.tecnologias?.map((tec, idx) => (
                      <span key={idx} className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                        <Icon icon={tec.icon} width="14" height="14" />
                        {tec.name}
                      </span>
                    ))}
                  </div>

                  <div className="h-px bg-zinc-800" />

                  <div className="text-zinc-300 text-sm leading-relaxed">
                    {typeof active.content === "function" ? active.content() : active.content}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title + index}
            onClick={() => setActive(card)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden cursor-pointer hover:border-zinc-600 transition-all duration-300"
          >
            <motion.div layoutId={`img-${card.title}-${id}`} className="relative h-44 overflow-hidden">
              <img
                src={card.src?.length > 0 ? card.src : ImageNofound}
                alt={card.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border backdrop-blur-sm ${
                  card.status
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                }`}>
                  {card.status ? "Live" : "WIP"}
                </span>
              </div>
            </motion.div>

            <div className="p-4">
              <motion.h3 layoutId={`title-${card.title}-${id}`} className="text-white font-semibold text-base mb-1">
                {card.title}
              </motion.h3>
              <p className="text-zinc-500 text-xs mb-3 line-clamp-2">{card.description}</p>
              <div className="flex items-center gap-1.5">
                {card.tecnologias?.slice(0, 4).map((tec, idx) => (
                  <span key={idx} title={tec.name} className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800">
                    <Icon icon={tec.icon} width="13" height="13" />
                  </span>
                ))}
                {card.tecnologias?.length > 4 && (
                  <span className="text-[10px] text-zinc-600 font-mono ml-1">+{card.tecnologias.length - 4}</span>
                )}
                <motion.div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon icon="tabler:arrow-up-right" className="text-zinc-500" width="16" height="16" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const cards = [
  {
    description: "Lightweight API client with zero external dependencies",
    title: "Elisa",
    src: "/elisa.png",
    ctaText: "Visit site",
    status: false,
    tecnologias: [
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Axios", icon: "logos:axios" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/Elisa",
    ctaLink: "https://elisaland.vercel.app/",
    content: () => (
      <p>Elisa is an API client built from scratch focused on simplicity and performance. Designed with a "zero dependencies" philosophy, it provides a clean environment for testing and developing REST APIs — without the bloat of tools like Postman. Built with React, TypeScript, and powered by Tauri for a native-like experience.</p>
    ),
  },
  {
    description: "Anime & manga encyclopedia powered by GraphQL",
    title: "DexTS",
    src: "/dexts.webp",
    status: true,
    ctaText: "Visit site",
    tecnologias: [
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Apollo Client", icon: "logos:apollostack" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/DexTS",
    ctaLink: "https://dexts.pages.dev",
    content: () => (
      <p>DexTS is a full-featured anime and manga encyclopedia that queries real-time data via GraphQL using Apollo Client. Users can browse synopses, characters, and saga details — and also watch anime or read manga directly on the platform. Demonstrates advanced data-fetching patterns and TypeScript type safety at scale.</p>
    ),
  },
  {
    description: "E-commerce clone with SSR and dynamic filters",
    title: "Mercado Libre Clone",
    src: "/mercadolibre.webp",
    status: false,
    ctaText: "Visit site",
    tecnologias: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/mercadoesclavo",
    ctaLink: "https://mercadoesclavo.vercel.app",
    content: () => (
      <p>A production-scale clone of Mercado Libre built with Next.js and server-side rendering. Features a fully functional product search, dynamic category filters, and a responsive layout that mirrors the real platform's UX. Highlights skills in SSR architecture, TypeScript, and performance optimization.</p>
    ),
  },
  {
    description: "VS Code extension for in-editor note management",
    title: "Notys",
    src: "/notys.png",
    ctaText: "View on Marketplace",
    status: false,
    tecnologias: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "VS Code API", icon: "logos:visual-studio-code" },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7",
    ctaLink: "https://marketplace.visualstudio.com/items?itemName=Develoops.Notys",
    content: () => (
      <p>Notys is a VS Code extension that lets developers create and manage quick notes directly inside the editor — without breaking their flow. Built with the VS Code Extension API and published to the official Marketplace. Demonstrates ability to ship tools that developers actually use in their daily workflow.</p>
    ),
  },
  {
    description: "Developer toolbox — JSON formatter and utilities",
    title: "Jade",
    src: "/jade.png",
    ctaText: "Visit site",
    status: false,
    tecnologias: [
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/Jade",
    ctaLink: "https://jade-sooty.vercel.app/",
    content: () => (
      <p>Jade is a developer-focused web toolbox built around a JSON formatter with real-time validation and tree visualization. Goes beyond formatting — it includes a set of utilities designed to speed up repetitive dev tasks. Uses recursive rendering to handle deeply nested JSON structures.</p>
    ),
  },
  {
    description: "Telegram bot that downloads YouTube audio via chat",
    title: "Catchy Bot 🤖",
    src: "/catchybot.webp",
    status: true,
    ctaText: "Open in Telegram",
    tecnologias: [
      { name: "Python", icon: "logos:python" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Telegram API", icon: "logos:telegram" },
      { name: "PyPI", icon: "logos:pypi" },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/CatchyBot",
    ctaLink: "https://web.telegram.org/a/#7759974599",
    content: () => (
      <p>Catchy Bot is a Telegram bot that converts YouTube links to audio and delivers them directly in chat. Fully containerized with Docker and published as a PyPI package. Demonstrates backend automation, API integration, containerization, and open-source packaging — outside the frontend stack.</p>
    ),
  },
  {
    description: "Fast port scanner with MAC spoofing — built in Python",
    title: "Speed Port",
    src: "/speedports.webp",
    status: true,
    ctaText: "View code",
    tecnologias: [
      { name: "Python", icon: "logos:python" },
      { name: "Nmap", icon: "file-icons:nmap" },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/AnchorPortss",
    ctaLink: "https://github.com/CesarMartinez7/AnchorPorts",
    content: () => (
      <p>Speed Port is a network security tool built in Python using Scapy and Nmap. It performs fast port scanning with optional MAC address spoofing to test network resilience. Shows depth beyond the browser — network protocols, low-level packet manipulation, and security tooling.</p>
    ),
  },
];