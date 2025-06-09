import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="my-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-8 mt-24 text-center">Social Links</h2>
      <div className="flex justify-center space-x-8">
        <a
          href="https://github.com/mahesaiqbal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-8 h-8 text-gray-400 hover:text-gray-100" />
        </a>
        <a
          href="https://www.linkedin.com/in/mahesaiqbal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-8 h-8 text-gray-400 hover:text-gray-100" />
        </a>
        <a
          href="https://medium.com/@mahesaiqbal6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium className="w-8 h-8 text-gray-400 hover:text-gray-100" />
        </a>
      </div>
    </motion.section>
  );
}

export default Contact
