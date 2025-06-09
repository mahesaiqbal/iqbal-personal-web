import { motion } from "framer-motion";

function Experience({ title, role, duration, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-zinc-800 p-6 rounded-xl shadow-md text-center break-inside-avoid"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-md font-semibold mt-2">{role}</p>
      <p className="text-md font-semibold mt-2">{duration}</p>
      <p className="text-zinc-400 mt-4 text-sm text-justify" style={{ textIndent: '1.3rem' }}>{description}</p>
    </motion.div>
  );
}

export default Experience;
