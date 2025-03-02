import React, {
  useRef,
  useState,
  useEffect,
  ReactNode,
  MouseEventHandler,
  UIEvent,
} from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer "
    >
      {children}
    </motion.div>
  );
};

interface Certificacion {
  name: string;
  institucion: string;
  isFinish: boolean;
  expedition: string;
  credentialID: string;
  credentialURL: string;
  skills: string[];
}

interface AnimatedListProps {
  items?: Array<Certificacion>;
  onItemSelect?: (item: string, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items = [
    {
      name: "Python Developer",
      institucion: "SoloLearn",
      isFinish: true,
      expedition: "Febrero 30",
      expiration: "No expira", // Si el certificado tiene fecha de expiración
      credentialID: "SL-12345", // ID único del certificado
      credentialURL: "https://www.sololearn.com/certificates/SL-12345", // URL de verificación
      skills: ["Python", "Programación", "Desarrollo de software"], // Habilidades adquiridas
    },
    {
      name: "Docker Essentials: A Developer Introduction",
      institucion: "IBM",
      isFinish: true,
      expedition: "Febrero 30",
      expiration: "No expira",
      credentialID: "IBM-67890",
      credentialURL: "https://www.ibm.com/certificates/IBM-67890",
      skills: ["Docker", "Contenedores", "Despliegue de aplicaciones"],
    },
    {
      name: "Python Intermediate",
      institucion: "SoloLearn",
      isFinish: true,
      expedition: "Febrero 30",
      expiration: "No expira",
      credentialID: "SL-54321",
      credentialURL: "https://www.sololearn.com/certificates/SL-54321",
      skills: ["Python", "Estructuras de datos", "Algoritmos avanzados"],
    },
    {
      name: "Curso de introducción al desarrollo web: HTML y CSS (1/2)",
      institucion: "SoloLearn",
      isFinish: true,
      expedition: "27 de febrero de 2025",
      expiration: "No expira",
      credentialID: " 306940459",
      credentialURL: "https://www.sololearn.com/certificates/SL-54321",
      skills: ["Html", "Css", "Web Concept"],
    },
    {
      name: "Introduction to Cybersecurity",
      institucion: "Cisco Networking Academy",
      isFinish: true,
      expedition: "Febrero 30",
      expiration: "No expira",
      credentialID: "CNA-11223",
      credentialURL: "https://www.cisco.com/certificates/CNA-11223",
      skills: ["Ciberseguridad", "Redes", "Protección de datos"],
    },
    {
      name: "Javascript Intermediate",
      institucion: "SoloLearn",
      isFinish: true,
      expedition: "Febrero 30",
      expiration: "No expira",
      credentialID: "SL-33445",
      credentialURL: "https://www.sololearn.com/certificates/SL-33445",
      skills: ["JavaScript", "Programación funcional", "ES6+"],
    },
    {
      name: "Introduction to Javascript",
      institucion: "SoloLearn",
      isFinish: true,
      expedition: "Febrero 30",
      expiration: "No expira",
      credentialID: "SL-55667",
      credentialURL: "https://www.sololearn.com/certificates/SL-55667",
      skills: ["JavaScript", "DOM", "Eventos"],
    },
    {
      name: "Introduction to Python",
      institucion: "SoloLearn",
      isFinish: true,
      expedition: "Febrero 30",
      expiration: "No expira",
      credentialID: "SL-77889",
      credentialURL: "https://www.sololearn.com/certificates/SL-77889",
      skills: ["Python", "Sintaxis básica", "Estructuras de control"],
    },
  ],

  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = "",
  itemClassName = "",
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } =
      e.target as HTMLDivElement;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  };

  // Keyboard navigation: arrow keys, tab, and enter selection
  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            //@ts-ignore
            onItemSelect(items[0], selectedIndex);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  // Scroll the selected item into view if needed
  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(
      `[data-index="${selectedIndex}"]`
    ) as HTMLElement | null;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
      } else if (
        itemBottom >
        containerScrollTop + containerHeight - extraMargin
      ) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: "smooth",
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative md:w-[700px] w-full  ${className}`}>
      <div
        ref={listRef}
        className={`max-h-[400px] overflow-y-auto p-4 ${
          displayScrollbar
            ? "[&::-webkit-scrollbar]:w-[20px] [&::-webkit-scrollbar-track]:bg-[#944f4f] [&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[4px]"
            : "scrollbar-hide"
        }`}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#222 #060606",
        }}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) {
                //@ts-ignore
                onItemSelect(item, index);
              }
            }}
          >
            <div
              className={`p-3  border shadow-2xs  border-zinc-900 shadow-zinc-900 flex flex-col gap-1  rounded-lg ${
                selectedIndex === index ? "bg-[#000000b4] transition-all duration-150" : ""
              } ${itemClassName}`}
            >
              <h3 className="m-0 text-md font-bold text-zinc-300 ">
                {item.name}
              </h3>
              <p className="text-balance text-sm   bg-clip-text font-light bg-gradient-to-t from-zinc-700 to-gray-100 text-transparent ">
                {item.institucion}
              </p>
              
              <ul className="flex gap-2 text-xs">
                {item.skills.map((skill) => (
                  <li className="w-fit border border-zinc-900 px-2 rounded-2xl  ">{skill}</li>
                ))}
              </ul>
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[50px]  from-black to-transparent pointer-events-none transition-opacity duration-1000 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to- to-transparent pointer-events-none transition-opacity duration-1000 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AnimatedList;
