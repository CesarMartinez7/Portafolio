import TiltedCard from "./Card";
import { ItemProyect } from "../lib/response";
import { Ref } from "react";
import { Link } from "react-router-dom";
import BlurText from "./Blurtext";


interface ProyectProps {
  divProject: Ref<HTMLDivElement>;
  data: ItemProyect[];
}

export default function Proyect({ divProject, data }: ProyectProps) {
  return (
    <div className="p-12 w-full flex gap-6 flex-col" ref={divProject}>
      <div className="w-full grid place-content-center">
        <BlurText
          text="Algunos de mis Proyectos"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mb-8"
        />
      </div>
      <div className="grid grid-cols-5 gap-6">
        {data.map((item) => (
          <Link to={`/proyect/${item.id}`}>
            <TiltedCard
              imageSrc={`./${item.image}`}
              altText={`${item.name}`}
              captionText={`${item.description}`}
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <a
                  className="tilted-card-demo-text shiny-button backdrop-blur-2xl p-0.5 rounded-lg"
                  href={item.link}
                >
                  {item.name}
                </a>
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
