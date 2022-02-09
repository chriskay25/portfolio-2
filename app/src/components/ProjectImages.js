import { useState } from "react";
import { motion } from "framer-motion";

const ProjectImages = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(null);

  const clicky = (i) => {
    if (imgIndex === i) return 1;
    if (imgIndex === null) return 1;
    if (imgIndex !== i) return 0;
  };

  return (
    <motion.div className="project-images">
      <motion.div>
        {imgIndex !== null && (
          <img
            src={images[imgIndex]}
            alt="main-img"
            style={{ width: "100%" }}
            onClick={() => setImgIndex(null)}
          />
        )}
      </motion.div>
      <motion.ul className="image-scroll">
        {images.map((img, i) => (
          <motion.li
            key={i}
            style={{ flex: 1, position: "relative" }}
            onClick={() =>
              imgIndex === i ? setImgIndex(null) : setImgIndex(i)
            }
          >
            {imgIndex === i && (
              <motion.div
                className="pic-border"
                layoutId="pb"
                initial={false}
                transition={{ type: "spring", stiffness: 125, damping: 20 }}
              />
            )}
            <motion.img className="scrolling-image" src={img} alt="img" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default ProjectImages;
