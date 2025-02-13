import { Icon } from "@iconify/react/dist/iconify.js";
import SpotlightCard from "./SpothCard";
import Particles from "./Particles";

interface Tool {
  name: string;
  color: string;
  link: string;
}

const tools: Tool[] = [
  { name: "react", color: "#61DAFB", link: "https://reactjs.org/" },
  {
    name: "javascript",
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { name: "python", color: "#3776AB", link: "https://www.python.org/" },
  { name: "linux", color: "#FCC624", link: "https://www.linux.org/" },
  { name: "nextjs", color: "#000000", link: "https://nextjs.org/" },
  { name: "npm", color: "#CB3837", link: "https://www.npmjs.com/" },
  { name: "mysql", color: "#4479A1", link: "https://www.mysql.com/" },
  { name: "git", color: "#F05032", link: "https://git-scm.com/" },
  { name: "vscode", color: "#007ACC", link: "https://code.visualstudio.com/" },
  { name: "tailwindcss", color: "#38B2AC", link: "https://tailwindcss.com/" },
  { name: "nodejs", color: "#339933", link: "https://nodejs.org/" },
  { name: "sqlite", color: "#003B57", link: "https://www.sqlite.org/" },
  {
    name: "html5",
    color: "#E34F26",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "typescript",
    color: "#3178C6",
    link: "https://www.typescriptlang.org/",
  },
];

export default function Habilidades() {
  return (
    <>
    <Particles></Particles>
    <div className="h-svw w-full">
      <div className="flex justify-center">
        <h2 className="text-[#dfdfd6] text-[44px] font-semibold w-[30vw]">
          Lenguajes y herramientas que utilizo
        </h2>
      </div>
      <div className="relative z-10">
        <div className="absolute w-full h-full bg-gradient-to-b z-50 from-[#101010] to-transparent"></div>
        <div className="grid grid-cols-3 lg:grid-cols-12 lg:p-26 gap-5 z-10 ">
          {tools.map((tool, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card flex justify-center"
              spotlightColor={tool.color}
            >
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                <Icon icon={`devicon:${tool.name}`} width="50" height="50" />
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
