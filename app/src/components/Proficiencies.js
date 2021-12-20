import { proficiencyData } from '../assets/data.js'

const Proficiencies = () => {
  return (
    <div className='proficiencies' style={{marginTop: '4rem'}}>
      <h3 style={{fontWeight: 400, fontSize: '1.8rem', color: 'grey'}}>PROFICIENCIES</h3>
      <ul style={{display: 'flex', flexWrap: 'wrap', width: '70%', margin: '0 auto', justifyContent: 'center'}}>
        {proficiencyData.map((p, i) => (
          <li key={i} style={{width: 'fit-content', padding: '.5rem', margin: '1rem', border: 'black 3px solid'}}>
            <p>{p.proficiency}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Proficiencies