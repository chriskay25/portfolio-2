import { motion } from 'framer-motion'

const containerVariants = {
  initial: {scale: 0},
  animated: {scale: 1},
  hover: {stroke: 'rgba(185, 228, 209, 1)', transition: {duration: 1}}
}

const lineVariants = {
  initial: {pathLength: 0},
  animated: {
    pathLength: 1, 
    transition: {duration: 1}
  },
  hover: {
    y: 10, 
    pathLength: .7, 
    transition: {
      duration: 1, 
      repeat: Infinity, 
      repeatType: 'reverse'
    }
  },
}

const ScrollToTop = () => {
  return (
    <button className='scroll-up-button' onClick={() => window.scrollTo({behavior: 'smooth', top: 0})}>
      <motion.svg variants={containerVariants} initial='initial' animate='animated' whileHover='hover'>
        <motion.path variants={lineVariants} d='m 25 10 0 32' />
        <motion.path variants={lineVariants} d='m 25 10 -12 12' />
        <motion.path variants={lineVariants} d='m 25 10 12 12' />
      </motion.svg>
    </button>
  )
}

export default ScrollToTop