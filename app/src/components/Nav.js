
const Nav = ({ profileRef, skillsRef, projectsRef, contactRef }) => {
  const scrollToSection = (ref) => {
    window.scrollTo({behavior: 'smooth', top: ref.current.offsetTop})
  }

  return (
    <nav>
      <ul style={{display: 'flex', color: 'white', justifyContent: 'space-between', width: '90%', maxWidth: '800px'}}>
        <li onClick={() => scrollToSection(profileRef)}>ABOUT</li>
        <li onClick={() => scrollToSection(skillsRef)}>SKILLS</li>
        <li onClick={() => scrollToSection(projectsRef)}>PROJECTS</li>
        <li onClick={() => scrollToSection(contactRef)}>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Nav