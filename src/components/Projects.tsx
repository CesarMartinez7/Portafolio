import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@iconify/react";
import Section from "./Section";
import SpotlightCard from "./SpothCard";
import { cn, fadeUp } from "./utils";
import { projects, type Project } from "../data/projects";

const FALLBACK_IMAGE = "/nofoundimage.webp";

// Detecta si un src es video por extensión
function isVideo(src: string): boolean {
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(src);
}

function StatusBadge({ live, className }: { live: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-full border bg-zinc-950/80 px-2.5 py-0.5 font-mono text-[11px] backdrop-blur-sm",
        live
          ? "border-emerald-500/30 text-emerald-400"
          : "border-amber-500/30 text-amber-400",
        className,
      )}
    >
      {live ? "● Live" : "◌ In progress"}
    </span>
  );
}

// ─── MediaItem ───────────────────────────────────────────────────────────────
// Renderiza imagen o video con fade-in al cargar

function MediaItem({ src, alt }: { src: string; alt: string }) {
  const [ready, setReady] = useState(false);
  const className = cn(
    "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500",
    ready ? "opacity-100" : "opacity-0",
  );

  if (isVideo(src)) {
    return (
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className={className}
        onCanPlay={() => setReady(true)}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onLoad={() => setReady(true)}
      onError={(e) => {
        e.currentTarget.src = FALLBACK_IMAGE;
      }}
    />
  );
}

// ─── useSlideshow ─────────────────────────────────────────────────────────────
// Avanza automáticamente solo en imágenes; los videos esperan al usuario

function useSlideshow(media: string[], interval = 3500) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (media.length <= 1 || isVideo(media[currentIndex])) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, interval);

    return () => clearTimeout(timer);
  }, [media, currentIndex, interval]);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % media.length);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);

  return { currentIndex, goTo: setCurrentIndex, goNext, goPrev };
}

// ─── Modal ───────────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { currentIndex, goTo, goNext, goPrev } = useSlideshow(project.media);
  const closeRef = useRef<HTMLButtonElement>(null);
  const current = project.media[currentIndex] ?? FALLBACK_IMAGE;
  const hasMany = project.media.length > 1;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-md"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-zinc-950 shadow-2xl"
      >
        {/* ── Media slideshow ── */}
        <div className="relative aspect-video shrink-0 overflow-hidden bg-zinc-900">
          <MediaItem
            key={current}
            src={current}
            alt={`${project.title} — media ${currentIndex + 1}`}
          />

          <StatusBadge live={project.live} className="absolute left-4 top-4" />

          <button
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-zinc-300 backdrop-blur-sm transition-colors hover:text-white"
          >
            <Icon icon="tabler:x" width="16" height="16" />
          </button>

          {hasMany && (
            <>
              <button
                type="button"
                aria-label="Previous"
                onClick={goPrev}
                className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-sm transition-colors hover:text-white"
              >
                <Icon icon="tabler:chevron-left" width="16" height="16" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={goNext}
                className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-sm transition-colors hover:text-white"
              >
                <Icon icon="tabler:chevron-right" width="16" height="16" />
              </button>

              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/50 px-2 py-1.5 backdrop-blur-sm">
                {project.media.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`${isVideo(src) ? "Video" : "Image"} ${idx + 1}`}
                    onClick={() => goTo(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === currentIndex
                        ? "w-5 bg-white"
                        : "w-1.5 bg-white/30 hover:bg-white/60",
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── Info ── */}
        <div className="flex flex-col gap-5 overflow-y-auto p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-3xl font-bold uppercase tracking-tighter text-white md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{project.description}</p>
            </div>
            <div className="flex shrink-0 gap-2">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
              >
                <Icon icon="tabler:brand-github" width="15" height="15" />
                Code
              </a>
              <a
                href={project.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
              >
                <Icon icon="tabler:external-link" width="15" height="15" />
                {project.ctaText}
              </a>
            </div>
          </div>

          <ul className="flex flex-wrap gap-2">
            {project.tech.map((tec) => (
              <li
                key={tec.name}
                className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-300"
              >
                <Icon icon={tec.icon} width="14" height="14" />
                {tec.name}
              </li>
            ))}
          </ul>

          <p className="border-t border-white/5 pt-5 text-sm leading-relaxed text-zinc-300">
            {project.content}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Cards ───────────────────────────────────────────────────────────────────

function TechIcons({ tech }: { tech: Project["tech"] }) {
  return (
    <ul className="flex items-center gap-1.5">
      {tech.slice(0, 4).map((tec) => (
        <li
          key={tec.name}
          title={tec.name}
          className="rounded-md border border-zinc-800 bg-zinc-900 p-1.5"
        >
          <Icon icon={tec.icon} width="13" height="13" />
        </li>
      ))}
      {tech.length > 4 && (
        <li className="ml-1 font-mono text-[10px] text-zinc-500">
          +{tech.length - 4}
        </li>
      )}
    </ul>
  );
}

function ProjectCard({
  project,
  featured,
  onOpen,
}: {
  project: Project;
  featured: boolean;
  onOpen: () => void;
}) {
  return (
    <SpotlightCard
      spotlightColor="rgba(52, 211, 153, 0.14)"
      className="rounded-3xl border-white/10 bg-zinc-950 p-0 transition-colors duration-300 hover:border-white/40"
    >
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "group flex h-full w-full flex-col text-left",
        featured && "min-h-80",
      )}
    >
      <div
        className={cn(
          "overflow-hidden bg-zinc-900",
          featured ? "absolute inset-0" : "relative aspect-[16/10]",
        )}
      >
        <img
          src={project.cover}
          alt=""
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
        )}
      </div>

      <StatusBadge live={project.live} className="absolute right-3 top-3" />

      <div
        className={cn(
          "relative flex flex-1 flex-col p-5",
          featured && "justify-end p-6 md:p-8",
        )}
      >
        {featured && (
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400">
            Featured
          </p>
        )}
        <h3
          className={cn(
            "flex items-center gap-2 font-bold uppercase tracking-tight text-white",
            featured ? "text-3xl md:text-5xl" : "text-lg",
          )}
        >
          {project.title}
          <Icon
            icon="tabler:arrow-up-right"
            width="16"
            height="16"
            className="text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400"
          />
        </h3>
        <p
          className={cn(
            "mt-1.5 text-zinc-400",
            featured ? "max-w-md text-sm md:text-base" : "text-sm",
          )}
        >
          {project.description}
        </p>
        <div className={cn("pt-4", !featured && "mt-auto")}>
          <TechIcons tech={project.tech} />
        </div>
      </div>
    </button>
    </SpotlightCard>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section
      id="projects"
      index="02"
      label="Projects"
      title="Selected"
      outline="Projects"
      aside={`${projects.length} projects`}
      description="Personal and open-source work built outside of my professional role."
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.li
            key={project.title}
            {...fadeUp}
            transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
            className={cn(index === 0 && "sm:col-span-2")}
          >
            <ProjectCard
              project={project}
              featured={index === 0}
              onOpen={() => setActive(project)}
            />
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {active && (
          <ProjectModal
            key={active.title}
            project={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
