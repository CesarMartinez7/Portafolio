//@ts-nocheck
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./utils/useOutside";
import { Icon } from "@iconify/react/dist/iconify.js";
import ImageNofound from "../../public/nofoundimage.webp";

// Media por proyecto — mezcla libre de imágenes y videos
const projectMedia: Record<string, string[]> = {
  Elisa: ["elisa.png", "elisa-white.png", "elisa-black.png"],
  DexTS: [
    "dexts.mp4",
    "dexts-menu.png",
    "dext-bleach.png",
    "dext-harribel.png",
  ],
  "Mercado Libre Clone": ["mercadolibre.mp4", "mercadolibre.webp"],
  Notys: ["notys.png", "notys-1.png", "notys-fullscreen.png"],
  "Tailwind Breakpoint": ["tailwind-break.png", "tailwind-break.png"],
  Jade: ["jade-comparator.png", "jade1.png", "jade.png"],
  "Catchy Bot 🤖": ["catchybot.webm", "catchybot.webp"],
  "Speed Port": [
    "speedport.mp4", // <- video primero
    "speedports.webp",
  ],
};

// Detecta si un src es video por extensión
function isVideo(src: string): boolean {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src);
}

// ─── Skeleton / Error ────────────────────────────────────────────────────────

function MediaSkeleton() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 gap-3 z-10">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full border-2 border-zinc-800" />
        <div className="absolute inset-0 rounded-full border-2 border-t-zinc-400 animate-spin" />
      </div>
      <span className="text-zinc-500 text-[11px] font-mono tracking-widest uppercase">
        Loading
      </span>
    </div>
  );
}

function MediaError() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 gap-2 z-10">
      <Icon
        icon="tabler:photo-off"
        className="text-zinc-700"
        width="30"
        height="30"
      />
      <span className="text-zinc-600 text-[11px] font-mono">
        Failed to load
      </span>
    </div>
  );
}

// ─── MediaItem ───────────────────────────────────────────────────────────────
// Renderiza imagen o video con loading y error handling

function MediaItem({ src, alt }: { src: string; alt: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
  }, [src]);

  if (isVideo(src)) {
    return (
      <motion.video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onCanPlay={() => setReady(true)}
      />
    );
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover object-top"
      initial={{ opacity: 0 }}
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onLoad={() => setReady(true)}
    />
  );
}

// ─── useSlideshow ─────────────────────────────────────────────────────────────
// Avanza automáticamente; si el slide actual es video, espera a que termine

function useSlideshow(media: string[], isActive: boolean, interval = 3500) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset al abrir la modal
  useEffect(() => {
    if (isActive) setCurrentIndex(0);
  }, [isActive]);

  // Auto-avance solo para imágenes
  useEffect(() => {
    if (!isActive || media.length <= 1) return;
    if (isVideo(media[currentIndex])) return; // videos no auto-avanzan

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isActive, media, currentIndex, interval]);

  const goTo = (idx: number) => setCurrentIndex(idx);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  return { currentIndex, goTo, goNext, goPrev };
}

// ─── Main component ──────────────────────────────────────────────────────────

export function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  const activeMedia = active
    ? (projectMedia[active.title] ?? [
        active.src?.length > 0 ? active.src : ImageNofound,
      ])
    : [];

  const { currentIndex, goTo, goNext, goPrev } = useSlideshow(
    activeMedia,
    !!active,
    3500,
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight" && active) goNext();
      if (e.key === "ArrowLeft" && active) goPrev();
    };
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, currentIndex]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div className="w-full">
      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            />

            <div className="fixed inset-0 grid place-items-center z-50 p-4">
              {/* Close button */}
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
                {/* ── Media slideshow ── */}
                <motion.div
                  layoutId={`img-${active.title}-${id}`}
                  className="relative h-64 overflow-hidden bg-zinc-900"
                >
                  <AnimatePresence mode="crossfade">
                    <MediaItem
                      key={`${active.title}-${currentIndex}`}
                      src={activeMedia[currentIndex] ?? ImageNofound}
                      alt={`${active.title} - media ${currentIndex + 1}`}
                    />
                  </AnimatePresence>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent pointer-events-none" />

                  {/* Video badge */}
                  {isVideo(activeMedia[currentIndex]) && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-full bg-black/60 border border-white/10 text-white/70 backdrop-blur-sm">
                        <Icon
                          icon="tabler:player-play-filled"
                          width="9"
                          height="9"
                        />
                        VIDEO
                      </span>
                    </div>
                  )}

                  {/* Status badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border backdrop-blur-sm ${
                        active.status
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                      }`}
                    >
                      {active.status ? "● Live" : "◌ In progress"}
                    </span>
                  </div>

                  {/* Navegación con flechas */}
                  {activeMedia.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goPrev();
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/80 transition-all backdrop-blur-sm"
                      >
                        <Icon
                          icon="tabler:chevron-left"
                          width="14"
                          height="14"
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          goNext();
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/80 transition-all backdrop-blur-sm"
                      >
                        <Icon
                          icon="tabler:chevron-right"
                          width="14"
                          height="14"
                        />
                      </button>
                    </>
                  )}

                  {/* Dots indicadores */}
                  {activeMedia.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                      {activeMedia.map((src, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            goTo(idx);
                          }}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            idx === currentIndex
                              ? "bg-white w-5"
                              : "bg-white/30 w-1.5 hover:bg-white/50"
                          }`}
                          title={isVideo(src) ? "Video" : `Imagen ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* ── Info ── */}
                <div className="flex flex-col gap-4 p-6 overflow-y-auto">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="text-2xl font-bold text-white mb-1"
                      >
                        {active.title}
                      </motion.h3>
                      <p className="text-zinc-400 text-sm">
                        {active.description}
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={active.ctaLinkCode}
                        target="_blank"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-lg transition-all"
                      >
                        <Icon
                          icon="tabler:brand-github"
                          width="15"
                          height="15"
                        />
                        Code
                      </a>
                      <a
                        href={active.ctaLink}
                        target="_blank"
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all"
                      >
                        <Icon
                          icon="tabler:external-link"
                          width="15"
                          height="15"
                        />
                        {active.ctaText}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {active.tecnologias?.map((tec, idx) => (
                      <span
                        key={idx}
                        className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        <Icon icon={tec.icon} width="14" height="14" />
                        {tec.name}
                      </span>
                    ))}
                  </div>

                  <div className="h-px bg-zinc-800" />

                  <div className="text-zinc-300 text-sm leading-relaxed">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ── Grid de cards ── */}
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
            <motion.div
              layoutId={`img-${card.title}-${id}`}
              className="relative h-44 overflow-hidden"
            >
              <img
                src={card.src?.length > 0 ? card.src : ImageNofound}
                alt={card.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              <div className="absolute top-3 right-3">
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border backdrop-blur-sm ${
                    card.status
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                  }`}
                >
                  {card.status ? "Live" : "WIP"}
                </span>
              </div>
            </motion.div>

            <div className="p-4">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="text-white font-semibold text-base mb-1"
              >
                {card.title}
              </motion.h3>
              <p className="text-zinc-500 text-xs mb-3 line-clamp-2">
                {card.description}
              </p>
              <div className="flex items-center gap-1.5">
                {card.tecnologias?.slice(0, 4).map((tec, idx) => (
                  <span
                    key={idx}
                    title={tec.name}
                    className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800"
                  >
                    <Icon icon={tec.icon} width="13" height="13" />
                  </span>
                ))}
                {card.tecnologias?.length > 4 && (
                  <span className="text-[10px] text-zinc-600 font-mono ml-1">
                    +{card.tecnologias.length - 4}
                  </span>
                )}
                <motion.div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon
                    icon="tabler:arrow-up-right"
                    className="text-zinc-500"
                    width="16"
                    height="16"
                  />
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
      <p>
        Developed a cross-platform API client using React, Rust, and Tauri,
        focused on high performance and minimal dependencies. The application
        implements a custom architecture with near-zero external libraries,
        including a fully custom-built JSON renderer based on recursive patterns
        to handle deeply nested data structures efficiently. Designed and
        implemented a proprietary editor for request/response handling, enabling
        flexible API interaction workflows. Supports Postman Collection v2.1 and
        environment management, allowing users to import, edit, and export
        collections and variables seamlessly. Integrated Supabase for cloud
        synchronization and persistence, while maintaining local-first
        performance through Rust-powered backend processes.
      </p>
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
      { name: "Supabase", icon: "logos:supabase-icon" },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7",
    ctaLink:
      "https://marketplace.visualstudio.com/items?itemName=Develoops.Notys",
    content: () => (
      <p>
        Notys is a VS Code extension that allows developers to create and manage
        quick notes directly within the editor — without breaking their
        workflow. Built using the VS Code Extension API and powered by Supabase
        for real-time data storage and synchronization. Published on the
        official Marketplace, it showcases the ability to build and ship
        practical tools that developers can rely on in their daily workflow.
      </p>
    ),
  },
  {
    description: "Firefox extension for Tailwind CSS breakpoint detection",
    title: "Tailwind Breakpoint",
    src: "/tailwind-break.png", // pon un screenshot
    images: [
      "/tailwind-breakpoint.png",
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80",
    ],
    status: true,
    ctaText: "View on Firefox",
    tecnologias: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Firefox", icon: "logos:firefox" },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7",
    ctaLink: "https://addons.mozilla.org/", // pon la URL exacta
    content: () => (
      <p>
        A Firefox extension that detects the active Tailwind CSS breakpoint in
        real time — showing whether you're on xs, sm, md, lg, xl or 2xl as you
        resize the browser. Built to speed up responsive development without
        leaving the browser.
      </p>
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
      <p>
        DexTS is a full-featured anime and manga encyclopedia that queries
        real-time data via GraphQL using Apollo Client. Users can browse
        synopses, characters, and saga details — and also watch anime or read
        manga directly on the platform. Demonstrates advanced data-fetching
        patterns and TypeScript type safety at scale.
      </p>
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
      <p>
        Jade is a developer-focused web toolbox that streamlines common
        development tasks, featuring a JSON formatter with real-time validation
        and tree visualization, a JSON comparator, JWT decoder, and text
        comparison tools. Designed for efficiency, it leverages recursive
        rendering to handle deeply nested data structures, delivering a fast and
        intuitive debugging experience.
      </p>
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
      <p>
        A production-scale clone of Mercado Libre built with Next.js and
        server-side rendering. Features a fully functional product search,
        dynamic category filters, and a responsive layout that mirrors the real
        platform's UX. Highlights skills in SSR architecture, TypeScript, and
        performance optimization.
      </p>
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
      <p>
        Catchy Bot is a Telegram bot that converts YouTube links to audio and
        delivers them directly in chat. Fully containerized with Docker and
        published as a PyPI package. Demonstrates backend automation, API
        integration, containerization, and open-source packaging — outside the
        frontend stack.
      </p>
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
      <p>
        Speed Port is a network security tool built in Python using Scapy and
        Nmap. It performs fast port scanning with optional MAC address spoofing
        to test network resilience. Shows depth beyond the browser — network
        protocols, low-level packet manipulation, and security tooling.
      </p>
    ),
  },
];
