import { useRef, useEffect } from 'react'
import AboutMe from './AboutMe'

const Profile = ({ collectRef }) => {
  const ref = useRef(null)
  
  useEffect(() => {
    collectRef(ref)
  })

  return (
    <section ref={ref} className='profile' style={{background: '#fff'}}>
      <div className='section-container'>
        <div className='section-header'>
          <h2 className='section-title'>PROFILE</h2>
          <div className='section-title-underline' />
        </div>

        <AboutMe />
      </div>
    </section>
  )
}

export default Profile