import { useRef, useEffect } from 'react'
import Project from './Project'
import { projectData } from '../assets/data'
import { motion } from 'framer-motion'

const Projects = ({ collectRef }) => {
  const ref = useRef(null)

  useEffect(() => {
    collectRef(ref)
  })

  return (
    <section ref={ref} className='projects'>
      <div className='section-container'>
        <div className='section-header'>
          <h2 className='section-title'>PROJECTS</h2>
          <div className='section-title-underline' />
        </div>
        <div className='projects-container'>
          <motion.ul style={{}} layout>
            {projectData.map((p, i) => (
              <Project key={i} project={p} />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}

export default Projects