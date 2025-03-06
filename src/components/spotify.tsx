//@ts-nocheck

import { act, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./utils/useOutside";
import { Icon } from "@iconify/react/dist/iconify.js";
import ImageNofound from "../../public/nofoundimage.webp";
import { video } from "framer-motion/client";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, seIsHovered] = useState<boolean>(false);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 "
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] bg-black/90 ">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white  h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%]  flex flex-col bg-black shadow-2xl shadow-white/2 rounded-full sm:rounded-xl overflow-hidden"
            >
              <motion.div layoutId={`img-${active.title}-${id}`}>
                {isHovered ? (
                  <video className="aspect-video" src={`./${active.video}`} autoPlay loop />
                ) : (
                  <img
                    width={240}
                    height={240}
                    src={active.src.length > 0 ? active.src : ImageNofound}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                )}
              </motion.div>

              <div className="mt-4">
                <div className="flex justify-between  items-center  px-4 mb-1">
                  <div className="w-fit">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className=" text-white shiny-text font-bold text-xl "
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                  <div className="gap-2 flex">
                    <motion.a
                      layout
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.1 },
                      }}
                      href={active.ctaLinkCode}
                      target="_blank"
                      className="px-2 py-0.5 text-xs font-bold bg-zinc-900 text-white  hover:bg-zinc-950 duration-200 border gap-1.5 border-zinc-800 border-b-3 whitespace-nowrap flex justify-center items-center rounded-md"
                    >
                      <Icon icon="tabler:brand-github" width="18" height="18" />
                      Repository
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.1 },
                      }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-1 text-sm font-bold bg-green-500 text-white rounded-lg hover:bg-green-600 duration-200 border border-green-600 border-b-3 whitespace-nowrap"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-1.5 mt-2 px-4 w-full  py-2 ">
                  {active.tecnologias?.map((tec) => (
                    <li className="w-fit bg-zinc-950 border-white/10 border text-xs py-1 px-2 rounded-2xl gap-1.5 flex items-center justify-center">
                      {tec.name}{" "}
                      <span>
                        <Icon icon={`${tec.icon}`} width="17" height="17" />
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-100  md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-300 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] text-sm"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <main className="max-w-3xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start p-4 gap-2 md:p-4 lg:p-2 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${index}`}
            key={card.title}
            onClick={() => {
              seIsHovered(true);
              setActive(card);
            }}
            className="p-3 bg-black/100 border border-zinc-950 flex flex-col transition-all  duration-300 hover:bg-zinc-950   hover:shadow-green-900 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`img-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src.length > 0 ? card.src : ImageNofound}
                  alt={card.description}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="grid  grid-cols-[1fr_auto]">
                <motion.div className="">
                  <motion.h3
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    layoutId={`title-${card.title}-${id}`}
                    className="text-zinc-300 font-bold "
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    layoutId={`description-${card.description}-${id}`}
                    className="text-balance bg-clip-text font-light bg-gradient-to-t  from-zinc-300 to-gray-100 shiny-text text-transparent text-sm "
                  >
                    {card.description}
                  </motion.p>
                </motion.div>
                {card.status ? (
                  <button className="bg-white/7 h-6 text-sm px-2 text-white font-bold rounded-md border-b-2 border-white/10">Finished</button>
                ) : (
                  <button className="bg-white/20 h-6 text-sm px-2 text-white font-bold rounded-md border-b-2 border-white/15">In development</button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </main>
    </motion.div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Free streaming platform",
    title: "Delfilms 🍿",
    src: "delfilms.webp",
    ctaText: "Visit site",
    status: true,
    video: "delfilms.webm",
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Javascript",
        icon: "logos:javascript",
      },
      {
        name: "Vite",
        icon: "logos:vitejs",
      },
      {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
      },
    ],
    ctaLink: "https://delfilms.pages.dev",
    ctaLinkCode: "https://github.com/CesarMartinez7/DelFilms",
    content: () => {
      return (
        <p className="text-sm">
          <strong>Delfilms</strong> is a free streaming platform with a wide
          selection of movies and series. Without subscriptions or annoying ads,
          it offers simple and cost-free access for movie lovers.
        </p>
      );
    },
  },
  {
    description: "Inventory and management system",
    title: "DataFast ⚡",
    src: "/datafast.webp",
    ctaText: "Visit site",
    video: "datafast.mp4",
    status: true,
    tecnologias: [
      {
        name: "Javascript",
        icon: "logos:javascript",
      },
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Tailwind",
        icon: "logos:tailwindcss-icon",
      },
      {
        name: "Chart.js",
        icon: "logos:chartjs",
      },
      {
        name: "Node.js",
        icon: "logos:nodejs-icon",
      },
      {
        name: "MySQL",
        icon: "logos:mysql-icon",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/DataFast",
    ctaLink: "https://github.com/CesarMartinez7/Datafast/tree/tailwind",
    content: () => {
      return (
        <p className="text-sm">
          DataFast is a system designed to optimize inventory management and
          facilitate product control in companies of all sizes. It improves
          efficiency and reduces operation time.
        </p>
      );
    },
  },
  {
    description: "Anime streaming platform",
    title: "Meko ☕",
    src: "/meko.webp",
    status: true,
    video: "meko.mp4",
    ctaText: "Visit site",
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Typescript",
        icon: "logos:typescript-icon",
      },
      {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/meko",
    ctaLink: "https://mekoo.pages.dev",
    content: () => {
      return (
        <p className="text-sm">
          Meko is a platform focused on anime streaming, with an updated catalog
          and a smooth interface. Find and enjoy your favorite series without
          complications.
        </p>
      );
    },
  },
  {
    description: "Anime and manga encyclopedia",
    title: "DexTS",
    src: "/dexts.webp",
    status: true,
    ctaText: "Visit site",
    video: "dexts.webm",
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Typescript",
        icon: "logos:typescript-icon",
      },
      {
        name: "GraphQL",
        icon: "logos:graphql",
      },
      {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
      },
      {
        name: "Apollo Client",
        icon: "logos:apollostack",
      },
      {
        name: "DaisyUI",
        icon: "logos:daisyui-icon",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/DexTS",
    ctaLink: "https://dexts.pages.dev",
    content: () => {
      return (
        <p className="text-sm">
          <strong>DexTS </strong> provides detailed information about anime and
          manga using GraphQL to fetch real-time data. Find synopses,
          characters, and more in one place, plus watch anime and read manga!
        </p>
      );
    },
  },
  {
    description: "Mercado Libre clone",
    title: "Mercado Libre Clone 📦",
    src: "/mercadolibre.webp",
    video: "mercadolibre.mp4",
    status: false,
    ctaText: "Visit site",
    tecnologias: [
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
      },
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Typescript",
        icon: "logos:typescript-icon",
      },
      {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/mercadoesclavo",
    ctaLink: "https://mercadoesclavo.vercel.app",
    content: () => {
      return (
        <p className="text-sm">
          A clone of Mercado Libre developed with Next.js, React, and Tailwind
          CSS. It replicates the shopping experience with advanced search and
          responsive design.
        </p>
      );
    },
  },
  {
    description: "Image search with Pexels API",
    title: "GalleryPhotos 📷",
    src: "/galleryphoto.webp",
    video: "galleryphoto.mp4",
    status: true,
    ctaText: "Visit site",
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Typescript",
        icon: "logos:typescript-icon",
      },
      {
        name: "Next.js",
        icon: "logos:nextjs-icon",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/gallery-photo-nextjs",
    ctaLink: "https://gallerry-two.vercel.app/",
    content: () => {
      return (
        <p className="text-sm">
          GalleryPhotos allows you to explore and download high-quality images
          thanks to the Pexels API. Find the perfect image in seconds with an
          intuitive interface.
        </p>
      );
    },
  },
  {
    description: "Dragon Ball encyclopedia",
    title: "Dragon Ball Wiki 🐉",
    src: "/dragonballwiki.webp",
    video: "dragonballwiki.webm",
    status: true,
    ctaText: "Visit site",
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Javascript",
        icon: "logos:javascript",
      },
      {
        name: "Vite",
        icon: "logos:vitejs",
      },
      {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/DragonBall",
    ctaLink: "https://dragonballwikki.pages.dev/",
    content: () => {
      return (
        <p className="text-sm">
          <strong>Dragon Ball Wiki</strong> is the ultimate platform for fans of
          the saga. Find information about characters, transformations, and
          sagas from this iconic universe.
        </p>
      );
    },
  },
  {
    description: "Calculator in VanillaJS",
    title: "Calculator 🖩",
    src: "/calculadora.webp",
    status: true,
    video: "calculadora.webm",
    ctaText: "Visit site",
    tecnologias: [
      {
        name: "HTML",
        icon: "logos:html-5",
      },
      {
        name: "CSS",
        icon: "logos:css-3",
      },
      {
        name: "Javascript",
        icon: "logos:javascript",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/orange",
    ctaLink: "https://calculadora-7df.pages.dev",
    content: () => {
      return (
        <p className="text-sm">
          A simple yet efficient calculator to perform basic math operations
          with a clean and user-friendly interface.
        </p>
      );
    },
  },
  {
    description: "Fast and versatile port scanner",
    title: "Speed Port",
    src: "/speedports.webp",
    video: "speedport.mp4",
    status: true,
    ctaText: "Look at code",
    tecnologias: [
      {
        name: "Python",
        icon: "logos:python",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez/anchorports",
    ctaLink: "https://github.com/CesarMartinez7/anchorport",
    content: () => {
      return (
        <p className="text-sm">
          <strong>Speed Port</strong> is a powerful port scanner built with
          Python. It features MAC address spoofing to disrupt a target network
          and leverages the capabilities of <strong>Scapy</strong>, a robust
          packet manipulation library for Python.
        </p>
      );
    },
  },
  {
    description: "Bot for Telegram",
    title: "Catchy Bot 🤖",
    src: "/catchybot.webp",
    status: true,
    video: "catchybot.webm",
    ctaText: "Send Message",
    tecnologias: [
      {
        name: "Python",
        icon: "logos:python",
      },
      {
        name: "Docker",
        icon: "logos:docker-icon",
      },
      {
        name: "Python Package",
        icon: "logos:pypi",
      },
      {
        name: "Telegram API",
        icon: "logos:telegram",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/CatchyBot",
    ctaLink: "https://web.telegram.org/a/#7759974599",
    content: () => {
      return (
        <p className="text-sm">
          This is a Telegram bot developed in Python that allows you to download
          music from YouTube directly from a chat. Simply send a video link, and
          the bot will convert it to audio and send it to you in seconds.
        </p>
      );
    },
  },
  {
    description: "Free game made Pygame",
    title: "Pysoccer",
    src: "/pysoccer.webp",
    ctaText: "Look at code",
    video: "pysoccer.mp4",
    status: false,
    tecnologias: [
      {
        name: "Python",
        icon: "logos:python",
      },
      {
        name: "Docker",
        icon: "logos:docker-icon",
      },
      {
        name: "Python Package",
        icon: "logos:pypi",
      },
    ],
    ctaLinkCode: "https://github.com/CesarMartinez7/PySoccer",
    ctaLink: "https://github.com/CesarMartinez7/PySoccer",
    content: () => {
      return (
        <p className="text-sm">
          Pysoccer is a game with weird physics and bugs that are really
          annoying but fun, making it a GOTY-worthy game to play OFFLINE WITH
          MULTIPLAYER.
        </p>
      );
    },
  },
  {
    description: "Real-time weather app",
    title: "WeatherNo ⛈️",
    src: "",
    status: true,
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Typescript",
        icon: "logos:typescript-icon",
      },
      {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
      },
      {
        name: "NextJS",
        icon: "logos:nextjs-icon",
      },
    ],
    ctaText: "Visit site",
    ctaLinkCode: "https://github.com/CesarMartinez/Delfilms",
    ctaLink: "https://github.com/CesarMartinez7/weathernow",
    content: () => {
      return (
        <p className="text-sm">
          WeatherNow keeps you informed about weather conditions in real-time.
          Get detailed forecasts and alerts for any location.
        </p>
      );
    },
  }
];
