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
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-zinc-900  shadow  sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`img-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
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
                      className="font-bold text-neutral-700 text-md dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-zinc-600 text-sm"
                    >
                      {active.description}
                    </motion.p>
                    <ul className="inline-flex gap-1.5 mt-1">
                      {active.tecnologias?.map((tec) => (
                        <li className="w-fit bg-zinc-950 py-1 px-2 rounded-2xl text-sm gap-1.5 inline-flex">
                          {tec.name}{" "}
                          <span>
                            <Icon icon={`${tec.icon}`} width="20" height="20 " />
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
                    className="px-4 py-3 text-sm rounded-sm font-bold bg-zinc-950 text-white"
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
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] text-sm"
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
                  className="font-semibold text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
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
    description: "Plataforma de streaming gratuita",
    title: "Delfilms 🍿",
    src: "delfilms.png",
    ctaText: "Visitar",
    tecnologias: [
      {
        name: "react",
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
          Delfilms es una plataforma de streaming gratuita con una amplia
          selección de películas y series. Sin suscripciones ni anuncios
          molestos, ofrece un acceso sencillo y sin costos para los amantes del
          cine.
        </p>
      );
    },
  },
  {
    description: "Sistema de gestión e inventario",
    title: "DataFast ⚡",
    src: "/datafast.png",
    ctaText: "Visitar",
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
          DataFast es un sistema diseñado para optimizar la gestión de
          inventarios y facilitar el control de productos en empresas de
          cualquier tamaño. Mejora la eficiencia y reduce tiempos de operación.
        </p>
      );
    },
  },
  {
    description: "Plataforma de streaming de anime",
    title: "Meko ☕",
    src: "/meko.png",
    ctaText: "Visitar",
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
          Meko es una plataforma enfocada en la transmisión de anime, con un
          catálogo actualizado y una interfaz fluida. Encuentra y disfruta de
          tus series favoritas sin complicaciones.
        </p>
      );
    },
  },
  {
    description: "Enciclopedia de anime y manga",
    title: "DexTS",
    src: "/dexts.png",
    ctaText: "Visitar",
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
          DexTS ofrece información detallada sobre anime y manga utilizando
          GraphQL para obtener datos en tiempo real. Encuentra sinopsis,
          personajes y más en un solo lugar.
        </p>
      );
    },
  },
  {
    description: "Aplicación de gestión de tareas",
    title: "TaskMaster ✅",
    src: "/taskmaster.png",
    ctaText: "Visitar",
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
          TaskMaster es una app diseñada para mejorar la productividad personal
          y en equipo. Planifica, organiza y alcanza tus metas con funciones
          intuitivas y colaborativas.
        </p>
      );
    },
  },
  {
    description: "Aplicación de clima en tiempo real",
    title: "WeatherNow ⛈️",
    src: "/weathernow.png",
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Typescript",
        icon: "logos:typescript",
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
    ctaText: "Visitar",
    ctaLink: "https://github.com/CesarMartinez7/weathernow",
    content: () => {
      return (
        <p className="text-sm">
          WeatherNow te mantiene informado sobre las condiciones climáticas en
          tiempo real. Recibe pronósticos detallados y alertas para cualquier
          ubicación.
        </p>
      );
    },
  },
  {
    description: "Búsqueda de imágenes con Pexels API",
    title: "GalleryPhotos 📷",
    src: "/galleryphoto.png",
    ctaText: "Visitar",
    tecnologias: [
      {
        name: "React",
        icon: "logos:react",
      },
      {
        name: "Typescript",
        icon: "logos:typescript",
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
          GalleryPhotos permite explorar y descargar imágenes de alta calidad
          gracias a la API de Pexels. Encuentra la imagen perfecta en segundos
          con una interfaz intuitiva.
        </p>
      );
    },
  },
  {
    description: "Enciclopedia de Dragon Ball",
    title: "Dragon Ball Wiki 🐉",
    src: "/dragonballwiki.png",
    ctaText: "Visitar",
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
          Dragon Ball Wiki es la plataforma definitiva para fans de la saga.
          Encuentra información sobre personajes, transformaciones y sagas de
          este icónico universo.
        </p>
      );
    },
  },
  {
    description: "Calculadora en VanillaJS",
    title: "Calculadora 🖩",
    src: "/calculadora.png",
    ctaText: "Visitar",
    tecnologias: [
      {
        name: "Javascript",
        icon: "logos:javascript",
      },
      {
        name: "Vite",
        icon: "logos:vitejs"
      }
    ],
    ctaLink: "https://calculadora-7df.pages.dev",
    content: () => {
      return (
        <p className="text-sm">
          Una calculadora sencilla pero eficiente para realizar operaciones
          matemáticas básicas con una interfaz clara y amigable.
        </p>
      );
    },
  },
  {
    description: "Clon de Mercado Libre",
    title: "Mercado Libre Clon 📦",
    src: "/mercadolibre.png",
    ctaText: "Visitar",
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
          Un clon de Mercado Libre desarrollado con Next.js, React y Tailwind
          CSS. Replica la experiencia de compra con búsqueda avanzada y diseño
          responsivo.
        </p>
      );
    },
  },
];
