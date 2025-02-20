//@ts-nocheck

import { act, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./utils/useOutside";
import { Icon } from "@iconify/react/dist/iconify.js";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

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
    <>
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
          <div className="fixed inset-0  grid place-items-center z-[100] ">
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-zinc-950  shadow  sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`img-${active.title}-${id}`}>
                <img
                  width={240}
                  height={240}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start pt-4 px-4 mb-1">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 text-lg dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-zinc-400 text-sm mb-3.5"
                    ></motion.p>
                    <ul className="flex flex-wrap gap-1.5 mt-1  w-full">
                      {active.tecnologias?.map((tec) => (
                        <li className="w-fit bg-zinc-950 py-1 px-2 rounded-2xl text-sm gap-1.5 inline-flex">
                          {tec.name}{" "}
                          <span>
                            <Icon
                              icon={`${tec.icon}`}
                              width="20"
                              height="20 "
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-2 text-sm font-bold bg-green-500 text-white rounded-md hover:bg-green-600 duration-200"
                  >
                    {"Visitar"}
                  </motion.a>
                </div>
                <div className=" relative px-4">
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
      <main className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4 p-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${index}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`img-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.description}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold  dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </main>
    </>
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
    src: "delfilms.png",
    ctaText: "Visit",
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
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
      },
    ],
    ctaLink: "https://delfilms.pages.dev",
    content: () => {
      return (
        <p className="text-sm">
          Delfilms is a free streaming platform with a wide selection of movies
          and series. Without subscriptions or annoying ads, it offers simple
          and cost-free access for movie lovers.
        </p>
      );
    },
  },
  {
    description: "Inventory and management system",
    title: "DataFast ⚡",
    src: "/datafast.png",
    ctaText: "Visit",
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Node.js",
        icon: "logos:nodejs-icon",
      },
      {
        name: "MongoDB",
        icon: "logos:mongodb",
      },
    ],
    ctaLink: "https://github.com/CesarMartinez7/Datafast",
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
    src: "/meko.png",
    ctaText: "Visit",
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
    src: "/dexts.png",
    ctaText: "Visit",
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
    ],
    ctaLink: "https://dexts.pages.dev",
    content: () => {
      return (
        <p className="text-sm">
          DexTS provides detailed information about anime and manga using
          GraphQL to fetch real-time data. Find synopses, characters, and more
          in one place, plus watch anime and read manga!
        </p>
      );
    },
  },
  {
    description: "Mercado Libre clone",
    title: "Mercado Libre Clone 📦",
    src: "/mercadolibre.png",
    ctaText: "Visit",
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
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
      },
    ],
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
    description: "Real-time weather app",
    title: "WeatherNo ⛈️",
    src: "/weathernow.png",
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
    ctaText: "Visit",
    ctaLink: "https://github.com/CesarMartinez7/weathernow",
    content: () => {
      return (
        <p className="text-sm">
          WeatherNow keeps you informed about weather conditions in real-time.
          Get detailed forecasts and alerts for any location.
        </p>
      );
    },
  },
  {
    description: "Image search with Pexels API",
    title: "GalleryPhotos 📷",
    src: "/galleryphoto.png",
    ctaText: "Visit",
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
    src: "/dragonballwiki.png",
    ctaText: "Visit",
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
    ],
    ctaLink: "https://dragonballwiki.pages.dev",
    content: () => {
      return (
        <p className="text-sm">
          Dragon Ball Wiki is the ultimate platform for fans of the saga. Find
          information about characters, transformations, and sagas from this
          iconic universe.
        </p>
      );
    },
  },
  {
    description: "Calculator in VanillaJS",
    title: "Calculator 🖩",
    src: "/calculadora.png",
    ctaText: "Visit",
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
      {
        name: "Vite",
        icon: "logos:vitejs",
      },
    ],
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
    description: "Task management app",
    title: "TaskMaster ✅",
    src: "/taskmaster.png",
    ctaText: "Visit",
    tecnologias: [
      {
        name: "Vue",
        icon: "logos:vue",
      },
      {
        name: "Tailwind CSS",
        icon: "logos:tailwindcss-icon",
      },
    ],
    ctaLink: "https://github.com/CesarMartinez7/taskmaster",
    content: () => {
      return (
        <p className="text-sm">
          TaskMaster is an app designed to improve personal and team
          productivity. Plan, organize, and achieve your goals with intuitive
          and collaborative features.
        </p>
      );
    },
  },
];
