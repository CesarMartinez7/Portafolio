import { Icon } from "@iconify/react/dist/iconify.js";
import SpotlightCard from "./SpothCard";
import Particles from "./Particles";
import ToolJson from "../Mocks/tools.json"

export default function Habilidades() {
  return (
    <>
    <Particles></Particles>
    <div className="h-screen w-full grid place-content-center">
      <div className="flex justify-center">
        <h2 className=" text-[44px] font-medium bg-gradient-to-t from-zinc-600 to-zinc-200 bg-clip-text text-transparent text-center ">
          Lenguajes y herramientas que utilizo  🚀
        </h2>
      </div>
      <div className="relative z-10">
        <div className="absolute w-full h-full bg-gradient-to-b z-50 from-[#101010] to-transparent"></div>
        <div className="grid grid-cols-4 md:grid-cols-6 p-8 lg:grid-cols-8 lg:px-44 lg:py-12 gap-5 z-10">
          {ToolJson.map((tool, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card flex justify-center"
              //@ts-ignore
              spotlightColor={tool.color}
            >
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                <Icon icon={`simple-icons:${tool.name}`} width="50" height="50" color="white" />
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
