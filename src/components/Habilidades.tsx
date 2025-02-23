import { Icon } from "@iconify/react/dist/iconify.js";
import SpotlightCard from "./SpothCard";
import ToolJson from "../Mocks/tools.json";

export default function Habilidades() {
  return (
    <>
      <div className="h-screen w-full grid place-content-center">
        <div className="flex justify-center">
          <h3 className="text-center text-3xl font-bold my-2 from-green-400 bg-clip-text  bg-gradient-to-br  to-green-700 text-transparent">
            My skills
          </h3>
        </div>
        <div className="relative z-10">
          <div className="absolute w-full h-full bg-gradient-to-b z-50 from-[#000] to-transparent"></div>
          <div className="grid grid-cols-4 md:grid-cols-6 p-8 lg:grid-cols-8 lg:px-44 lg:py-12 gap-5 z-10">
            {ToolJson.map((tool, index) => (
              <SpotlightCard
                key={index}
                className="custom-spotlight-card flex justify-center"
                //@ts-ignore
                spotlightColor={tool.color}
              >
                <a href={tool.link} target="_blank" rel="noopener noreferrer">
                  <Icon
                    icon={`logos:${tool.name}`}
                    width="50"
                    height="50"
                    color="white"
                  />
                </a>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
