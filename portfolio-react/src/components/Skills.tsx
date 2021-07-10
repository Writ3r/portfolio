import React, { Component } from "react";
import {  MDBAnimation } from "mdbreact";

import pic from "../assets/numberSmall.png";

const Skills = () => {
  return (
    <MDBAnimation reveal type="fadeIn">
      <section id="skills" className="anchor">
        <h2 className="my-5 h3 text-center">Skills</h2>
        <div className="row features-small mb-5 mt-3 wow fadeIn">
          <div className="col-md-4">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text animated pulse infinite"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Java</h6>
                <p className="grey-text">
                  4 years of experience<br />
                  OSGI &amp; Spring Boot frameworks<br />
                  Service-oriented design
                </p>
                <div className="skills-item"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text animated pulse infinite"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Databases</h6>
                <p className="grey-text">
                  4 years of experience <br />
                  MySQL, PostgreSQL, MongoDB, Solr <br />
                  SQL and NoSQL design
                </p>
                <div className="skills-item"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text animated pulse infinite"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">JavaScript</h6>
                <p className="grey-text">
                  3 years of experience <br />
                  React, Bootstrap, jQuery<br />
                  Component-oriented design
                </p>
                <div className="skills-item"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text animated pulse infinite"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Python</h6>
                <p className="grey-text">
                  2 years of experience <br />
                  Flask, Dash, Tensorflow<br />
                  Automation, Neural networks
                </p>
                <div className="skills-item"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 flex-center">
            <img src={pic} alt="Image of 0" className="z-depth-0 img-fluid d-none d-md-block" />
          </div>
          <div className="col-md-4 mt-2">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text animated pulse infinite"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Version Control</h6>
                <p className="grey-text">
                  2 years of experience <br />
                  Git<br />
                  Tourtoise, Github Desktop
                </p>
                <div className="skills-item"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text animated pulse infinite"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Building</h6>
                <p className="grey-text">
                  2 years of experience <br />
                  Ant, Maven, Docker<br />
                  Traditional, and Cloud-oriented
                </p>
                <div className="skills-item"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text animated pulse infinite"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">DevOps</h6>
                <p className="grey-text">
                  2 years of experience <br />
                  Atlassian &amp; Azure stacks<br />
                  Issue estimation, PRs, Branch creation
                </p>
                <div className="skills-item"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <i className="fas fa-check-circle fa-2x indigo-text animated pulse infinite"></i>
              </div>
              <div className="col-10">
                <h6 className="feature-title">Cloud</h6>
                <p className="grey-text">
                  1 year of experience <br />
                  Docker, Kubernetes, AWS<br />
                  Microservice-oriented design
                </p>
                <div className="skills-item"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MDBAnimation>
  );
}

export default Skills;