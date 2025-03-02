
import { cn } from "./utils";
import { motion, MotionProps } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedSpan = ({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn(
      "grid text-sm font-normal tracking-tight text-wrap",
      className
    )}
    {...props}
  >
    {children}
  </motion.div>
);

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}

export const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string. Received:");
  }

  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight text-wrap", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

interface TerminalProps {
  className?: string;
}

export const Terminal = ({ className }: TerminalProps) => {
  const [isType, setIsType] = useState<boolean>(true);

  return (
    <div
      className={cn(
        "z-0 h-full w-full max-w-2xl rounded-xl border border-white/5  bg-background overflow-ellipsis text-wrap shiny-text",
        className
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border border-zinc-900 px-4 py-2">
        <div className="flex justify-between">
          <div className="flex flex-row gap-x-2 items-center ">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
          </div>
          <button
            className=" text-xs rounded-md px-1.5 py-1  duration-150 cursor-pointer"
            onClick={() => {
              setIsType(!isType);
            }}
          >
            {!isType ? (<Icon icon="logos:json" width="20" height="22" />) : (<Icon icon="logos:typescript-icon" width="22" height="20" />)}
            
          </button>
        </div>
      </div>
      {isType ? (<motion.pre initial={{scale: 0.97}} className="p-4">
        <code className="grid gap-y-1 ">
          <TypingAnimation>~ more me.json</TypingAnimation>

          <AnimatedSpan delay={1000} className="text-blue-500">
            <span>{`{`}</span>
          </AnimatedSpan>

          
          <AnimatedSpan delay={2000} className="text-green-500">
            <span className="pl-4">{`"name": "Cesar",`}</span>
          </AnimatedSpan>

         
          <AnimatedSpan delay={2500} className="text-green-500">
            <span className="pl-4">{`"lastName": "Martinez",`}</span>
          </AnimatedSpan>
          

          <AnimatedSpan delay={3000} className="text-green-500">
            <span className="pl-4 whitespace-nowrap">{`"age": "18",`}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3500} className="text-green-500">
            <span className="pl-4">{`"role": "Developer Frontend",`}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3800} className="text-green-500">
            <span className="pl-4">{`"learning":`} <span className="text-blue-500">{"["}</span> {'"Figma", "Docker"'}<span className="text-blue-500"> {"]"} </span>  </span>
          </AnimatedSpan>
          

          <AnimatedSpan delay={4000} className="text-green-500">
            <span className="pl-4">{`"overview": "Disciplined, self-taught frontend developer",`}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5000} className="text-green-500">
            <p className="pl-4">
              {`"skills":`} <span className="text-blue-500">{"["}</span>
              {""}
            </p>
          </AnimatedSpan>

          <AnimatedSpan delay={5500} className="text-green-500">
            <span className="pl-4">{`"JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "SQL", "Git", "Tailwind", "Linux"`}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6000} className="text-green-500">
            <p className="pl-4 ">
              <span className="text-blue-500">{`]`}</span>,
            </p>
          </AnimatedSpan>

          <AnimatedSpan delay={6500} className="text-green-500">
            <span className="pl-4">{`"editor": "VS Code",`}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={7000} className="text-green-500">
            <span className="pl-4">{`"os": "Manjaro Linux"`}</span>
          </AnimatedSpan>

          <AnimatedSpan delay={7500} className="text-blue-500">
            <span>{`}`}</span>
          </AnimatedSpan>

          <TypingAnimation delay={8000} className="text-muted-foreground">
            JSON successfully loaded.
          </TypingAnimation>
        </code>
      </motion.pre>) : (
        <motion.pre   className="p-4">
        <code className="grid gap-y-1 ">
          <TypingAnimation>~ more me.ts</TypingAnimation>

          <AnimatedSpan delay={1500} className="">
            <span className="text-fuchsia-5">
              {"interface Me"} <span className="text-blue-500"> {`{`}</span>
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span className="pl-4">
              {`"name":         `}{" "}
              <span className="text-fuchsia-500">string</span> ,
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span className="pl-4">
              {`"lastName" :    `}{" "}
              <span className="text-fuchsia-500">string</span> ,
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-green-500">
            <span className="pl-4">
              {`"age":         `} <span className="text-fuchsia-500"> number</span> ,
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-green-500">
            <span className="pl-4">
              {`"role": `}{"        "}
              <span className="text-fuchsia-500"> string</span> ,{" "}
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-500">
            <span className="pl-4">learning": <span className="text-fuchsia-500">{`      string`}</span> <span className="text-blue-500">{"[]"}</span> ,</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3500} className="text-green-500">
            <span className="pl-4">
              {`"overview":    `} <span className="text-fuchsia-500"> string</span>,
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="text-green-500">
            <p className="pl-4">
              {`"skills":`}{" "}
              <span className="text-blue-500">
                {"       "}
                <span className="text-fuchsia-500">string</span> {"[]"}
              </span>
              {" ,"}
            </p>
          </AnimatedSpan>

          <AnimatedSpan delay={4500} className="text-green-500">
            <span className="pl-4">
              {`"editor":`}{" "}
              <span className="text-fuchsia-500"> {"      string "}</span>
              {" ,"}
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={5000} className="text-green-500">
            <span className="pl-4">
              {`"os": `}{" "}
              <span className="text-fuchsia-500">{"          string"}</span>
              {" ,"}
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={5500} className="text-blue-500">
            <span>{`}`}</span>
          </AnimatedSpan>

          <TypingAnimation delay={6000} className="text-muted-foreground">
            TS successfully loaded.
          </TypingAnimation>
        </code>
      </motion.pre>
      ) }
      
    </div>
  ) 
};
