import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 px-4 border-b border-zinc-800">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">
          <a href="/" className="hover:no-underline">Mahesa Iqbal</a>
        </h1>
        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-4">
          <a href="#about" className="px-2 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">About</a>
          <a href="#experiences" className="px-2 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">Experiences</a>
          <a href="#projects" className="px-2 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">Projects</a>
          <a href="#contact" className="px-2 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">Contact</a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-2 py-2 rounded-md sm:hidden hover:bg-zinc-700 hover:text-white transition"
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Nav Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden mt-4 flex flex-col gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">About</a>
            <a href="#experiences" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">Experiences</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-md hover:bg-zinc-700 hover:text-white transition">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header