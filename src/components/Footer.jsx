import { motion } from "framer-motion";

function Footer() {
  return (
    <footer>
      <div className="w-full mx-auto max-w-screen-xl mt-24 mb-4">
        <p className="text-sm text-center dark:text-white">
          © {new Date().getFullYear()}{" "}
          Mahesa Iqbal's Personal Web. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
