import React, { Component } from "react";
import {  MDBAnimation, MDBRow, MDBCol } from "mdbreact";
const Zoom = require('react-reveal/Zoom');

interface SkillInput {
  name:string,
  desc:string,
  icon:string
}

const Skill = (props:SkillInput) => {
  return (
    <MDBRow className="row about-me-item">
      <MDBCol size="1" className="mr-3">
        <i className={props.icon}></i>
      </MDBCol>
      <MDBCol size="10">
        <h5 className="feature-title">{props.name}</h5>
        <p className="grey-text">{props.desc}</p>
      </MDBCol>
    </MDBRow>
  );
}

const AboutMe = () => {
  return (
    <Zoom>
      <section id="about" className="pageAnchor">
        <h3 className="h3 text-center mb-5">About Me</h3>
        <MDBRow className="row wow fadeIn">
          <MDBCol lg="6" md="12" className="px-4">
            <Skill 
              name="Engineer" 
              desc="Engineering new and interesting projects is my jam. It's satisfying turning an idea into a design." 
              icon="fas fa-code fa-2x indigo-text animated pulse infinite" />
            <Skill 
              name="Developer" 
              desc="Developing code to fit project specifications is delightful. I love implementing new and interesting designs." 
              icon="fas fa-code-branch fa-2x blue-text animated pulse infinite" />
            <Skill 
              name="Problem Solver" 
              desc="Problems exist to be solved. My goal is to help that process along." 
              icon="fas fa-graduation-cap fa-2x cyan-text animated pulse infinite" />
          </MDBCol>
          <MDBCol lg="6" md="12">
            <Skill 
              name="Gamer" 
              desc="Destiny, League of Legends, Minecraft, etc. Have played, and love them all." 
              icon="fas fa-gamepad fa-2x indigo-text animated pulse infinite" />
            <Skill 
              name="Hiker" 
              desc="Mountains, valleys, deserts, fields. Hiking is my preferred method to experience it all." 
              icon="fas fa-hiking fa-2x blue-text animated pulse infinite" />
            <Skill 
              name="Walker" 
              desc="Turn on some music, chillax, and take a few mile walk. That's the life I like to live." 
              icon="fas fa-walking fa-2x cyan-text animated pulse infinite" />
          </MDBCol>
        </MDBRow>
      </section>
    </Zoom>
  );
}

export default AboutMe;