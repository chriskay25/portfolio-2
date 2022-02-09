import { useRef, useEffect } from "react";
import Project from "./Project";
import { projectData } from "../assets/data";
import { motion } from "framer-motion";

const Projects = ({ collectRef }) => {
  const ref = useRef(null);

  useEffect(() => {
    collectRef(ref);
  });

  return (
    <section ref={ref} className="projects">
      <div style={{ transition: ".5s" }} className="section-container">
        <div className="section-header">
          <h2 className="section-title">PROJECTS</h2>
          <div className="section-title-underline" />
        </div>
        <div className="projects-container">
          <motion.ul>
            {projectData.map((p, i) => (
              <Project key={i} project={p} />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
