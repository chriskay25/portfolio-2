import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [profileRef, setProfileRef] = useState(null);
  const [skillsRef, setSkillsRef] = useState(null);
  const [projectsRef, setProjectsRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);

  const collectRef = (sectionRef) => {
    switch (sectionRef.current.className) {
      case "profile":
        return setProfileRef(sectionRef);
      case "skills":
        return setSkillsRef(sectionRef);
      case "projects":
        return setProjectsRef(sectionRef);
      case "footer":
        return setContactRef(sectionRef);
      default:
        return;
    }
  };

  return (
    <div className="portfolio-app">
      <Nav
        profileRef={profileRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Intro />
      <Profile collectRef={collectRef} />
      <Skills collectRef={collectRef} />
      <Projects collectRef={collectRef} />
      <Footer collectRef={collectRef} />
      <ScrollToTop />
    </div>
  );
};

export default App;
