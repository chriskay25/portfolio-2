import liLogoDark from '../assets/li-dark.png'
import ghLogoDark from '../assets/gh-dark.png'
import { motion } from 'framer-motion'

const SocialMedia = () => {

  return (
    <motion.div
      className="social-media"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8, ease: "easeIn" }}
    >
      <ul style={{ display: "flex" }}>
        <li className="social-media-icon">
          <a
            className="social-media-link"
            href="https://linkedin.com/in/chris-kay-4060bb61"
          >
            <img src={liLogoDark} alt="linked-in-logo" />
          </a>
        </li>
        <li className="social-media-icon">
          <a className="social-media-link" href="https://github.com/chriskay25">
            <img src={ghLogoDark} alt="github-logo" />
          </a>
        </li>
      </ul>
    </motion.div>
  );
}

export default SocialMedia