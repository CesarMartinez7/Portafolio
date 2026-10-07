import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "../App.css";

export default function NotFound() {
  return (
    <motion.div
      className="grid h-svh min-h-svh place-content-center gap-8 px-6"
      aria-label="nofound-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-[clamp(4rem,22vw,14rem)] font-bold uppercase leading-[0.9] tracking-tighter text-fg">
        <span className="block">404</span>
        <span className="text-outline block">Lost</span>
      </h1>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        ¿Qué estás haciendo aquí?
      </p>
      <Link
        to="/"
        className="justify-self-start rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
      >
        Come back
      </Link>
    </motion.div>
  );
}
