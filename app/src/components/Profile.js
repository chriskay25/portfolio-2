import AboutMe from './AboutMe'
import ProfileDetails from './ProfileDetails'

const Profile = () => {
  return (
    <section className='profile'>
      <div className='profile-container'>
        <div className='profile-header'>
          <h2 style={{fontSize: '3rem', fontWeight: 300, color: 'grey'}}>Profile</h2>
          <p style={{fontSize: '1.7rem'}}>Full Stack Web Developer</p>
          <div style={{width: '60vw', height: '2px', background: 'mediumseagreen', margin: '20px auto'}} />
        </div>

        <AboutMe />
        <div className='pic' />
        <ProfileDetails />
      </div>
    </section>
  )
}

export default Profile