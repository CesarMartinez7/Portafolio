export interface Project {
  title: string;
  description: string;
  cover: string;
  // Logo/icono opcional de la marca que se muestra en la tarjeta
  logo?: string;
  // Destacado: tarjeta grande (ocupa 2 columnas)
  featured?: boolean;
  // Mezcla libre de imágenes y videos para el slideshow
  media: string[];
  live: boolean;
  ctaText: string;
  ctaLink: string;
  codeLink: string;
  tech: { name: string; icon: string }[];
  // Métricas destacadas que se muestran en el modal del proyecto
  stats?: { value: string; label: string }[];
  content: string;
}

export const projects: Project[] = [
  {
    title: "Elisa",
    featured: true,
    description: "A fast, local-first API client for web & desktop",
    cover: "/img/elisa-cliente-landing-2.png",
    media: [
      "/img/elisa-cliente-landing-2.png",
      "/img/elisa-overview.png",
      // "/img/elisa-cliente-landing-1.png",
      "/img/elisa-dark-last-version-2.webp",
      "/img/elisa-states.webp",
      "/canvas-v2.webp",
      "/client.webp",
      "/flow-editor-v2.webp",
      "/flow-log-v2.webp",
      "/loadtest-v2.webp",
    ],
    live: true,
    ctaText: "Visit site",
    ctaLink: "https://elisa-five.vercel.app/#/landing",
    codeLink: "https://github.com/CesarMartinez7/Elisa",
    tech: [
      { name: "React", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tauri", icon: "logos:tauri" },
      { name: "Rust", icon: "logos:rust" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Axios", icon: "logos:axios" },
    ],
    stats: [
      { value: "v1.0.17", label: "Latest release" },
      { value: "545", label: "Commits" },
      { value: "3", label: "Platforms" },
      { value: "Local-first", label: "Architecture" },
    ],
    content:
      "Elisa is a free, open-source alternative to Postman that runs both in the browser and as a lightweight Tauri desktop app. It ships a code editor and a JSON/XML/HTML viewer built from scratch on a recursive node renderer, so deeply nested payloads stay fast to read and edit. It imports, edits and exports Postman collections and environments, and persists everything locally first, syncing to the cloud through Supabase when signed in. The desktop build uses a Rust backend to bypass CORS and keep requests fast, and adds request flows, a Monaco-based editor, Git integration and light/dark themes — all in a single view with no context switching.",
  },
  {
    title: "Anchor Port",
    description: "Keyboard-driven TUI to monitor and control your LAN",
    cover: "/img/anchorport-panel.webp",
    media: ["/img/anchorport-panel.webp", "/img/anchorport-menu.webp"],
    live: true,
    ctaText: "View code",
    ctaLink: "https://github.com/CesarMartinez7/AnchorPorts",
    codeLink: "https://github.com/CesarMartinez7/AnchorPorts",
    tech: [
      { name: "Python", icon: "logos:python" },
      { name: "Textual", icon: "tabler:terminal-2" },
      { name: "Scapy", icon: "tabler:network" },
      { name: "Nmap", icon: "file-icons:nmap" },
    ],
    stats: [
      { value: "3", label: "Built-in tools" },
      { value: "ARP · DNS", label: "Control" },
      { value: ".exe", label: "Standalone" },
      { value: "Auto", label: "Discovery" },
    ],
    content:
      "Anchor Port is a keyboard-driven terminal UI (built with Textual) for administering your own local network — no typing IP addresses by hand. It auto-discovers every device and, from a live table, lets you block or kick them via ARP, monitor which DNS domains each one reaches, and run a detailed port and OS scan with Nmap. It grew out of a simple port scanner into a full network control tool using Scapy for layer-2 packet work, with a persistent device registry, timed blocks and custom aliases. Ships as a standalone executable via PyInstaller, so it runs without a Python install.",
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
    live: true,
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
    title: "Jade",
    featured: true,
    description: "Offline-first dev toolbox: JSON, JWT, regex & color",
    cover: "/img/jade-hero.webp",
    logo: "/jade.svg",
    media: [
      "/img/jade-hero.webp",
      "/img/jade-jwt.webp",
      "/img/jade-regex.webp",
      "/img/jade-jwt-tilt.webp",
    ],
    live: true,
    ctaText: "Visit site",
    ctaLink: "https://jade-sooty.vercel.app/",
    codeLink: "https://github.com/CesarMartinez7/Jade",
    tech: [
      { name: "React 19", icon: "logos:react" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
      { name: "GSAP", icon: "logos:greensock-icon" },
    ],
    stats: [
      { value: "6", label: "Tools in one" },
      { value: "100%", label: "In-browser" },
      { value: "0", label: "Backend calls" },
      { value: "WCAG", label: "Contrast check" },
    ],
    content:
      "Jade is a developer toolbox that runs entirely in the browser — nothing you paste ever leaves your machine. It bundles six tools in one UI: a JSON formatter with live validation and tree, table and TypeScript-interface views; a structural JSON comparator that diffs by value and ignores key order and formatting; a text comparator; a JWT decoder that reads header and payload locally; a regex tester that explains each token of your pattern and highlights matches in real time; and a color tool that converts formats, builds scales and harmonies, and checks WCAG contrast. The JSON viewer uses a recursive renderer so deeply nested payloads stay fast to read.",
  },

  {
    title: "Tailwind Breakpoint",
    description: "Firefox extension for Tailwind CSS breakpoint detection",
    cover: "/img/tailwind-break.webp",
    media: ["/img/tailwind-break.webp"],
    live: true,
    ctaText: "View on Firefox",
    ctaLink: "https://addons.mozilla.org/es-ES/firefox/addon/tailwind_breack/", // pon la URL exacta
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
  // {
  //   title: "Mercado Libre Clone",
  //   description: "E-commerce clone with SSR and dynamic filters",
  //   cover: "/mercadolibre.webp",
  //   media: ["/mercadolibre.mp4", "/mercadolibre.webp"],
  //   live: false,
  //   ctaText: "Visit site",
  //   ctaLink: "https://mercadoesclavo.vercel.app",
  //   codeLink: "https://github.com/CesarMartinez7/mercadoesclavo",
  //   tech: [
  //     { name: "Next.js", icon: "logos:nextjs-icon" },
  //     { name: "React", icon: "logos:react" },
  //     { name: "TypeScript", icon: "logos:typescript-icon" },
  //     { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
  //   ],
  //   content:
  //     "A production-scale clone of Mercado Libre built with Next.js and server-side rendering. Features a fully functional product search, dynamic category filters, and a responsive layout that mirrors the real platform's UX. Highlights skills in SSR architecture, TypeScript, and performance optimization.",
  // },
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
];
