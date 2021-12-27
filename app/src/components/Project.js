import ghLogo from '../assets/gh-light-sm.png'

const Project = ({ project }) => {
  return (
    <li className='project'>
      <h3 style={{fontSize: '1.8rem', fontWeight: 500, color: 'mediumseagreen'}}>{project.name}</h3>
      <img src={ghLogo} alt='github-logo' onClick={() => window.location.href = project.link} />
      <p>Frontend: {project.frontend}</p>
      <p>Backend: {project.backend}</p>
      <p>Description: {project.description}</p>
    </li>
  )
}

export default Project