import React, { Component } from "react";
import {  MDBAnimation, MDBRow, MDBCol  } from "mdbreact";

import pic from "../assets/numberSmall.png";

interface Description {
  line1:string,
  line2:string,
  line3:string
}

interface SkillInput {
  name:string,
  desc:Description,
}

const SkillArea = (props:SkillInput) => {
  return (
    <MDBRow>
      <MDBCol size="2">
        <i className="fas fa-check-circle fa-2x indigo-text animated pulse infinite"></i>
      </MDBCol>
      <MDBCol size="10">
        <h6 className="feature-title">{props.name}</h6>
        <p className="grey-text">
          {props.desc.line1}<br />
          {props.desc.line2}<br />
          {props.desc.line3}
        </p>
        <div className="skills-item"></div>
      </MDBCol>
    </MDBRow>
  );
}

const Skills = () => {
  return (
    <MDBAnimation reveal type="fadeIn">
      <section id="skills" className="pageAnchor">
        <h2 className="my-5 h3 text-center">Skills</h2>
        <MDBRow className="features-small mb-5 mt-3">
          <MDBCol md="4">
            <SkillArea 
              name="Java"
              desc={{line1:"4 years of experience",line2:"OSGI & Spring Boot frameworks",line3:"Service-oriented design"}}
            />
            <SkillArea 
              name="Databases"
              desc={{line1:"4 years of experience",line2:"MySQL, PostgreSQL, MongoDB, Solr",line3:"SQL and NoSQL design"}}
            />
            <SkillArea 
              name="JavaScript"
              desc={{line1:"3 years of experience",line2:"React, Bootstrap, jQuery",line3:"Component-oriented design"}}
            />
            <SkillArea 
              name="Python"
              desc={{line1:"2 years of experience",line2:"Flask, Dash, Tensorflow",line3:"Automation, Neural networks"}}
            />
          </MDBCol>
          <MDBCol md="4" className="flex-center">
            <img src={pic} alt="Image of 0" className="z-depth-0 img-fluid d-none d-md-block" />
          </MDBCol>
          <MDBCol md="4" className="mt-2">
            <SkillArea 
              name="Version Control"
              desc={{line1:"2 years of experience",line2:"Git",line3:"Tourtoise, Github Desktop"}}
            />
            <SkillArea 
              name="Building"
              desc={{line1:"2 years of experience",line2:"Ant, Maven, Docker",line3:"Traditional, and Cloud-oriented"}}
            />
            <SkillArea 
              name="DevOps Tools"
              desc={{line1:"2 years of experience",line2:"Atlassian & Azure stacks",line3:"Issue estimation, PRs, Branch creation"}}
            />
            <SkillArea 
              name="Cloud"
              desc={{line1:"1 year of experience",line2:"Docker, Kubernetes, AWS",line3:"Microservice-oriented design"}}
            />
          </MDBCol>
        </MDBRow>
      </section>
    </MDBAnimation>
  );
}

export default Skills;