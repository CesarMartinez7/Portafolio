import { motion } from "motion/react";
import { Icon } from "@iconify/react/dist/iconify.js";

const links = [
  { icon: "tabler:brand-github", href: "https://github.com/CesarMartinez7", label: "GitHub" },
  { icon: "tabler:brand-linkedin", href: "https://www.linkedin.com/in/cesar-martinez-castro-383943332/", label: "LinkedIn" },
  { icon: "tabler:mail", href: "mailto:cesarwamartinez@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Let's build something together
            </h3>
            <p className="text-zinc-500 text-sm">
              Open to new opportunities and interesting projects.
            </p>
          </div>

          <motion.a
            href="mailto:cesarwamartinez@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
          >
            <Icon icon="tabler:mail" width="18" height="18" />
            cesarwamartinez@gmail.com
          </motion.a>

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <p className="text-zinc-600 text-xs font-mono">
              © {new Date().getFullYear()} César Martínez — Frontend Developer
            </p>
            <div className="flex items-center gap-1">
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  whileHover={{ y: -2 }}
                  title={link.label}
                  className="p-2 rounded-lg text-zinc-600 hover:text-zinc-300 hover:bg-zinc-900 transition-all"
                >
                  <Icon icon={link.icon} width="18" height="18" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}