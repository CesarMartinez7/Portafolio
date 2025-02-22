import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      className="h-svh min-h-svh grid place-content-center gap-5"
      aria-label="nofound-page"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h4 className="text-4xl text-zinc-300 ">Que estas haciendo aqui?</h4>
      <motion.button
        className="bg-green-500 font-extrabold hover:bg-green-600 duration-150 rounded-md py-2 border border-b-4 border-green-700"
        whileInView={{ scale: 1 }}
        whileHover={{rotate: 1}}
        initial={{ scale: 0 }}
        animate={{transition: {duration : 5},}}
      >
        Come back
      </motion.button>
    </motion.div>
  );
}
