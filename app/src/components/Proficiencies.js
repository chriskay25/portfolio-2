import { proficiencyData } from '../assets/data.js'

const Proficiencies = () => {
  return (
    <div className='proficiencies'>
      <h3 className='section-subtitle'>PROFICIENCIES</h3>
      <ul>
        {proficiencyData.map((p, i) => (
          <li key={i}>
            <p>{p.proficiency}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Proficiencies