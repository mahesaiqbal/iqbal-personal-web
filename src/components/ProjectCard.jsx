import { motion } from "framer-motion";
import StoreButton from "./StoreButton";
import "../App.css";

function ProjectCard({
  name,
  associatedWith,
  platform,
  description,
  techStacks,
  googlePlayUrl,
  appStoreUrl,
  duration,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-zinc-800 p-6 rounded-xl shadow-md text-center break-inside-avoid"
    >
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-md font-semibold mt-2">
        Associated with {associatedWith}
      </p>
      <p className="text-md font-semibold mt-2">{platform} platform</p>
      <p className="text-md font-semibold mt-2">{duration}</p>
      <p className="text-zinc-400 mt-4 text-sm text-justify" style={{ textIndent: '1.3rem' }}>{description}</p>
      <div className="tech-stack mt-4">
        {techStacks.map((tech, index) => (
          <span key={index} className="badge">
            {tech}
          </span>
        ))}
      </div>
      <StoreButton googlePlayUrl={googlePlayUrl} appStoreUrl={appStoreUrl} />
    </motion.div>
  );
}

export default ProjectCard;
