import { useState } from "react";
import { motion } from "framer-motion";
import ProjectTop from "./ProjectTop";
import ProjectImages from "./ProjectImages";

const projectVariants = {
  initial: { background: "#fff" },
  animated: { background: "#fff" },
  selected: { background: "#7e6e6e" },
};

const Project = ({ project }) => {
  const [selected, setSelected] = useState(false);

  const open = () => setSelected(!selected);

  return (
    <motion.li
      className="project"
      initial="initial"
      animate={selected ? "selected" : "animated"}
      variants={projectVariants}
    >
      <ProjectTop project={project} selected={selected} open={open} />
      {selected && project.images.length > 0 && (
        <ProjectImages images={project.images} />
      )}
      {selected && project.images.length < 1 && (
        <div style={{ textAlign: "center" }}>Pictures Coming Soon!</div>
      )}
    </motion.li>
  );
};

export default Project;
