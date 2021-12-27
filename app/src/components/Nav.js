
const Nav = () => {
  return (
    <nav style={{padding: '1rem 0', width: '100%', display: 'flex', justifyContent: 'center', position: 'fixed'}}>
      <ul style={{display: 'flex', color: 'white', justifyContent: 'space-between', width: '80%'}}>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
    </nav>
  )
}

export default Nav