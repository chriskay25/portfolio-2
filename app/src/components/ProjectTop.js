import ghLogo from "../assets/gh-logo-light.png";
import { motion } from "framer-motion";

const titleVariants = {
  initial: { color: "#fff" },
  animated: { color: "#3cb371" },
  selected: { color: "#9bdabe" },
};

const textVariants = {
  initial: { color: "#000" },
  animated: { color: "#000" },
  selected: { color: "#fff", transition: { duration: 0.2 } },
};

const ProjectTop = ({ project, selected, open }) => {
  return (
    <div className="project-top" onClick={() => open()}>
      <motion.h3
        style={{ fontSize: "1.8rem", fontWeight: 500 }}
        variants={titleVariants}
      >
        {project.name}
      </motion.h3>

      <motion.img
        className="project-github"
        src={ghLogo}
        alt="github-logo"
        onClick={() => (window.location.href = project.link)}
        animate={selected ? { filter: "invert(0)" } : { filter: "invert(1)" }}
      />

      <motion.div style={{ margin: "1rem 0 3rem 0" }}>
        <motion.p variants={textVariants}>
          Frontend: {project.frontend}
        </motion.p>
        <motion.p variants={textVariants}>Backend: {project.backend}</motion.p>
        <motion.p variants={textVariants}>
          Description: {project.description}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProjectTop;
