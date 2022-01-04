import { useRef, useEffect } from 'react'
import Stack from './Stack'
import Proficiencies from './Proficiencies'

const Skills = ({ collectRef }) => {
  const ref = useRef(null)

  useEffect(() => {
    collectRef(ref)
  }, [ref])

  return (
    <section ref={ref} className='skills'>
      <div className='section-container'>
        <div className='section-header'>
          <h2 className='section-title'>SKILLS</h2>
          <div className='section-title-underline' />
        </div>

        <Stack />
        <Proficiencies />
      </div>
    </section>
  )
}

export default Skills