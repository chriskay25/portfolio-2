import { motion, useViewportScroll, useTransform } from 'framer-motion'
import skyline from '../assets/atl-color.png'

const Intro = () => {
  const { scrollYProgress } = useViewportScroll()
  const color = useTransform(scrollYProgress, [0, .1], ['linear-gradient(0deg, #fff, #2097c1)', 'linear-gradient(0deg, #fff374, #df9697)'])

  return (
    <section className='intro'>
      <motion.div className='intro-background' style={{background: color}}
      />
      <img className='intro-background-skyline' src={skyline} alt='atlanta-skyline' />
      <motion.h1 initial={{x: '100vw', y: '-0px'}} animate={{x: 0, y: 0}} transition={{duration: 1.5}} style={{fontSize: '4.2rem'}}>CHRIS KAY</motion.h1>
      <motion.div initial={{height: '.2rem', width: '0rem'}} animate={{height: '.2rem', width: '20rem', background: '#fff'}} transition={{delay: 1, duration: .7, ease: 'linear'}}></motion.div>
      <motion.h4 initial={{x: '-100vw', y: '0px'}} animate={{x: 0, y: 0}} transition={{duration: 1.5}} style={{fontSize: '1.5rem', fontWeight: '600'}}>FULL STACK WEB DEVELOPER</motion.h4>
      <motion.h5 initial={{opacity: 0, x: '0', y: '5vh'}} animate={{opacity: 1, x: 0, y: 0}} transition={{delay: 1, duration: .8}} style={{fontSize: '1.2rem', fontWeight: '600'}}>ATLANTA, GA</motion.h5>
    </section>
  )
}

export default Intro