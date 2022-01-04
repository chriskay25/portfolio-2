import { useRef, useEffect } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import SocialMedia from './SocialMedia'

const Footer = ({ collectRef }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useViewportScroll()
  const hexPath = useTransform(scrollYProgress, [.985, 1], [0, 1])
  const hexStroke = useTransform(scrollYProgress, [.97, .98, 1], ['#ffffff00', '#8bb4a2', '#fff'])
  const hexFill = useTransform(scrollYProgress, [.97, 1], ['#b9e4d1', '#000'])
  const letterPath = useTransform(scrollYProgress, [.97, 1], [0, 1])
  const letterFill = useTransform(scrollYProgress, [.97, 1], ['#8bb4a2', '#fff'])
  const letterStroke = useTransform(scrollYProgress, [.97, 1], ['#fff', '#aaa'])
  const d = useTransform(scrollYProgress, [.97, 1], ['M 50 5, -45 25, 0 15, 0 15, 15 10, 15 10, 15 10, 15 -10, 15 -10, 15 -10, 0 -15, 0 -15, 0 0, 0 0, 0 0, 0 0', 'm 32 23, 0 45, 5.8 0, 0 -16.8, 4.62 -4.08, 19.8 21, 7.2 0, -22.8 -25.2, 21.6 -19.8, -7.2 0, -22.8 20.4, 0 -20.4, -6 0'])

  useEffect(() => {
    collectRef(ref)
  }, [])

  return (
    <section ref={ref} className='footer'>
      <div className='footer-container'>
        <div className='contact-me'>
          <h3>Have a job or project? Talk to me.</h3>
          <a href='mailto:ckay84@protonmail.com'>
            ckay84@protonmail.com
          </a>
        </div>
        <div style={{ height: '140px', display: 'flex', position: 'relative', justifyContent: 'center', alignContent: 'center'}}>
          <svg viewBox='0 0 100 100' style={{height: '135px', position: 'absolute', top: '0%', overflow: 'visible'}}>
            <motion.path d='M 50 5, 5 30, 5 60, 50 90, 95 60, 95 30, 50 5'
              strokeWidth='3px' 
              strokeLinecap='round'
              style={{pathLength: hexPath, stroke: hexStroke, fill: hexFill}}
            />
            <motion.path 
              d={d}
              style={{pathLength: letterPath, stroke: letterStroke, fill: letterFill, strokeWidth: '2px'}}
            />
          </svg>
        </div>
        <div className='thanks'>
          <p>Thanks for visiting!</p>
        </div>
        <div className='social-media-footer'>
          <SocialMedia />
        </div>
      </div>
    </section>
  )
}

export default Footer