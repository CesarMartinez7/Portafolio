export interface Project {
  title: string;
  description: string;
  cover: string;
  // Mezcla libre de imágenes y videos para el slideshow
  media: string[];
  live: boolean;
  ctaText: string;
  ctaLink: string;
  codeLink: string;
  tech: { name: string; icon: string }[];
  content: string;
}

export const projects: Project[] = [
  {
    title: "Elisa",
    description: "Lightweight API client with zero external dependencies",
    cover: "/img/elisa-dark-last-version.webp",
    media: [
      "/img/elisa-dark-last-version-2.webp",
      "/canvas-v2.webp",
      "/client.webp",
      "/flow-editor-v2.webp",
      "/flow-log-v2.webp",
      "/loadtest-v2.webp",
    ],
    live: false,
    ctaText: "Visit site",
    ctaLink: "https://elisa-five.vercel.app/#/landing",
    codeLink: "https://github.com/CesarMartinez7/Elisa",
    tech: [
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Axios", icon: "logos:axios" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
    ],
    content:
      "Developed a cross-platform API client using React, Rust, and Tauri, focused on high performance and minimal dependencies. The application implements a custom architecture with near-zero external libraries, including a fully custom-built JSON renderer based on recursive patterns to handle deeply nested data structures efficiently. Designed and implemented a proprietary editor for request/response handling, enabling flexible API interaction workflows. Supports Postman Collection v2.1 and environment management, allowing users to import, edit, and export collections and variables seamlessly. Integrated Supabase for cloud synchronization and persistence, while maintaining local-first performance through Rust-powered backend processes.",
  },
  {
    title: "Notys",
    description: "VS Code extension for in-editor note management",
    cover: "/img/notys.webp",
    media: [
      "/img/notys.webp",
      "/img/notys-1.webp",
      "/img/notys-fullscreen.webp",
    ],
    live: false,
    ctaText: "View on Marketplace",
    ctaLink:
      "https://marketplace.visualstudio.com/items?itemName=Develoops.Notys",
    codeLink: "https://github.com/CesarMartinez7",
    tech: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "VS Code API", icon: "logos:visual-studio-code" },
      { name: "Supabase", icon: "logos:supabase-icon" },
    ],
    content:
      "Notys is a VS Code extension that allows developers to create and manage quick notes directly within the editor — without breaking their workflow. Built using the VS Code Extension API and powered by Supabase for real-time data storage and synchronization. Published on the official Marketplace, it showcases the ability to build and ship practical tools that developers can rely on in their daily workflow.",
  },
  {
    title: "Tailwind Breakpoint",
    description: "Firefox extension for Tailwind CSS breakpoint detection",
    cover: "/img/tailwind-break.webp",
    media: ["/img/tailwind-break.webp"],
    live: true,
    ctaText: "View on Firefox",
    ctaLink: "https://addons.mozilla.org/", // pon la URL exacta
    codeLink: "https://github.com/CesarMartinez7",
    tech: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Firefox", icon: "logos:firefox" },
    ],
    content:
      "A Firefox extension that detects the active Tailwind CSS breakpoint in real time — showing whether you're on xs, sm, md, lg, xl or 2xl as you resize the browser. Built to speed up responsive development without leaving the browser.",
  },
  {
    title: "DexTS",
    description: "Anime & manga encyclopedia powered by GraphQL",
    cover: "/dexts.webp",
    media: [
      "/dexts.mp4",
      "/img/dexts-menu.webp",
      "/img/dext-bleach.webp",
      "/img/dext-harribel.webp",
    ],
    live: true,
    ctaText: "Visit site",
    ctaLink: "https://dexts.pages.dev",
    codeLink: "https://github.com/CesarMartinez7/DexTS",
    tech: [
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Apollo Client", icon: "logos:apollostack" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
    ],
    content:
      "DexTS is a full-featured anime and manga encyclopedia that queries real-time data via GraphQL using Apollo Client. Users can browse synopses, characters, and saga details — and also watch anime or read manga directly on the platform. Demonstrates advanced data-fetching patterns and TypeScript type safety at scale.",
  },
  {
    title: "Jade",
    description: "Developer toolbox — JSON formatter and utilities",
    cover: "/img/jade.webp",
    media: ["/img/jade-comparator.webp", "/img/jade1.webp", "/img/jade.webp"],
    live: false,
    ctaText: "Visit site",
    ctaLink: "https://jade-sooty.vercel.app/",
    codeLink: "https://github.com/CesarMartinez7/Jade",
    tech: [
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
    ],
    content:
      "Jade is a developer-focused web toolbox that streamlines common development tasks, featuring a JSON formatter with real-time validation and tree visualization, a JSON comparator, JWT decoder, and text comparison tools. Designed for efficiency, it leverages recursive rendering to handle deeply nested data structures, delivering a fast and intuitive debugging experience.",
  },
  {
    title: "Mercado Libre Clone",
    description: "E-commerce clone with SSR and dynamic filters",
    cover: "/mercadolibre.webp",
    media: ["/mercadolibre.mp4", "/mercadolibre.webp"],
    live: false,
    ctaText: "Visit site",
    ctaLink: "https://mercadoesclavo.vercel.app",
    codeLink: "https://github.com/CesarMartinez7/mercadoesclavo",
    tech: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
    ],
    content:
      "A production-scale clone of Mercado Libre built with Next.js and server-side rendering. Features a fully functional product search, dynamic category filters, and a responsive layout that mirrors the real platform's UX. Highlights skills in SSR architecture, TypeScript, and performance optimization.",
  },
  {
    title: "Catchy Bot",
    description: "Telegram bot that downloads YouTube audio via chat",
    cover: "/catchybot.webp",
    media: ["/catchybot.webm", "/catchybot.webp"],
    live: true,
    ctaText: "Open in Telegram",
    ctaLink: "https://web.telegram.org/a/#7759974599",
    codeLink: "https://github.com/CesarMartinez7/CatchyBot",
    tech: [
      { name: "Python", icon: "logos:python" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Telegram API", icon: "logos:telegram" },
      { name: "PyPI", icon: "logos:pypi" },
    ],
    content:
      "Catchy Bot is a Telegram bot that converts YouTube links to audio and delivers them directly in chat. Fully containerized with Docker and published as a PyPI package. Demonstrates backend automation, API integration, containerization, and open-source packaging — outside the frontend stack.",
  },
  {
    title: "Speed Port",
    description: "Fast port scanner with MAC spoofing — built in Python",
    cover: "/speedports.webp",
    media: ["/speedport.mp4", "/speedports.webp"],
    live: true,
    ctaText: "View code",
    ctaLink: "https://github.com/CesarMartinez7/AnchorPorts",
    codeLink: "https://github.com/CesarMartinez7/AnchorPorts",
    tech: [
      { name: "Python", icon: "logos:python" },
      { name: "Nmap", icon: "file-icons:nmap" },
    ],
    content:
      "Speed Port is a network security tool built in Python using Scapy and Nmap. It performs fast port scanning with optional MAC address spoofing to test network resilience. Shows depth beyond the browser — network protocols, low-level packet manipulation, and security tooling.",
  },
];
