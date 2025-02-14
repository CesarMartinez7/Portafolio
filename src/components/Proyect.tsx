import SplitText from "./SplitText";
import TiltedCard from "./Card";
import { ItemProyect } from "../lib/response";
import { Ref } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "./CountUp";

interface ProyectProps {
  divProject: Ref<HTMLDivElement>;
  data: ItemProyect[];
}

export default function Proyect({ divProject, data }: ProyectProps) {
  const [countProyect] = useState(data.length);
  return (
    <div className="p-12 w-full flex gap-6 flex-col" ref={divProject}>
      <div className="w-full grid place-content-center">
        <CountUp
          from={0}
          to={countProyect}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text"
        />
        <SplitText
          text={`Mis ${countProyect} proyectos mas destacados`}
          className="text-2xl text-zinc-300 shiny-text font-medium"
          textAlign="left"
          delay={20}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
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
