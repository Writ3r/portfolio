import {  MDBContainer } from "mdbreact";

import Portfolio from './Portfolio';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';

const MainContents = () => {
  return (
    <main>
        <MDBContainer>
          <Portfolio />
          <hr className="my-5" />
          <AboutMe />
          <hr className="my-5" />
          <Experience />
          <hr className="my-5" />
          <Skills />
          <hr className="my-5" />
          <Projects />
        </MDBContainer>
    </main>
  );
}

export default MainContents;