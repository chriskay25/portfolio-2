import Stack from './Stack'
import Proficiencies from './Proficiencies'

const Skills = () => {
  return (
    <section className='skills'>
      <div className='skills-header'>
        <h2 style={{fontSize: '3rem', fontWeight: 300, color: 'grey'}}>Skills</h2>
        <div style={{width: '60vw', height: '2px', background: 'mediumseagreen', margin: '20px auto'}} />
      </div>
      
      <Stack />
      <Proficiencies />
    </section>
  )
}

export default Skills