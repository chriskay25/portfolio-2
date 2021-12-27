import Project from './Project'
import { projectData } from '../assets/data'

const Projects = () => {
  return (
    <section className='outer-container' style={{background: '#fff'}}>
      <div className='section-container'>
        <div className='section-header'>
          <h2 className='section-title'>Projects</h2>
          <div className='section-title-underline' />
        </div>
        <div style={{}}>
          <ul>
            {projectData.map((p, i) => (
              <Project key={i} project={p} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects