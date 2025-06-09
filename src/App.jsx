import About from "./components/About";
import Header from "./components/Header";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen w-full">
      <Header />
      <main className="w-full max-w-4xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App
