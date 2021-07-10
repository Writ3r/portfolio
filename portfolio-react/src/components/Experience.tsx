import React, { Component } from "react";
import {  MDBAnimation, MDBNav, MDBNavItem, MDBTabContent, MDBTabPane } from "mdbreact";
import MDBNavLink from "./MDB/NavLink";
import { BrowserRouter as Router } from 'react-router-dom';

class Experience extends Component {

  state = {
    activeItem: "1"
  };

  toggle = (tab : string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    return (
      <MDBAnimation reveal type="fadeIn">
        <section id="experience" className="anchor">

          <h2 className="my-5 h3 text-center">Experience</h2>

          <div className="row wow fadeIn">
            <div className="col-lg-12 col-md-12 px-4">
              <Router>
                <MDBNav className="lucas-tabs nav-tabs nav-justified">
                  <MDBNavItem>
                    <MDBNavLink isActive={() => false} link to="#" className="h-100" role="tab" active={this.state.activeItem === "1"} onClick={this.toggle("1")}>
                      <i className="fas fa-laptop-code indigo-text"></i> BAE Systems - Software Engineer 2
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink isActive={() => false} link to="#" className="h-100" role="tab" active={this.state.activeItem === "2"} onClick={this.toggle("2")}>
                      <i className="fas fa-people-carry blue-text"></i> Marcellus Schools - Summer Help
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink isActive={() => false} link to="#" className="h-100"role="tab" active={this.state.activeItem === "3"} onClick={this.toggle("3")}>
                        <i className="fas fa-users cyan-text"></i> Beak And Skiff - Worker
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem} >
                  <MDBTabPane tabId="1" role="tabpanel" className={`fade ${this.state.activeItem === "1" ? "show" : ""}`}>
                    <div className="tab-pane-container">
                      <h5 className="feature-title title-margin">Information</h5>
                      <p className="grey-text">
                        <strong>Starting Position:</strong> Software Engineer 1 <br/> 
                        <strong>Period:</strong> June 2019 - PRESENT 
                      </p>
                      <h5 className="feature-title title-margin">Responsibilities</h5>
                      <p className="grey-text">
                        Primary responsibilty was building and mainting GXP Xplorer's Service infastructure. Secondary was doing cloud related changes, and making supporting webclient 
                        changes if necessary. Also made dev support related tools to optimize efficiency during debugging and building.
                      </p>
                      <h5 className="feature-title title-margin">Awards</h5>
                      <p className="grey-text">
                        All of my performance reviews have had excellent scores thus far. In addition, achieved two Impact awards for my interest in our service infastructure, and cloud-related work during covid.
                      </p>
                      <h5 className="feature-title title-margin">Progression</h5>
                      <p className="grey-text">
                        Progressed significantly in my ability to write enterprise-grade code in both the server-side and in cloud environments.
                        On the service-side I've learned about REST endoints, messaging systems, dependency injection, and service-oriented architecture.
                        In the cloud, I've learned the basics of code containerization, along with management and deployment of those containers.
                      </p>
                    </div>
                  </MDBTabPane>
                  <MDBTabPane tabId="2" role="tabpanel" className={`fade ${this.state.activeItem === "2" ? "show" : ""}`}>
                    <div className="tab-pane-container">
                      <h5 className="feature-title title-margin">Information</h5>
                      <p className="grey-text">
                        <strong>Starting Position:</strong> Summer Help <br/> 
                        <strong>Period:</strong> July 2012 - August 2018
                      </p>
                      <h5 className="feature-title title-margin">Responsibilities</h5>
                      <p className="grey-text">
                        Supporting the custodial staff in cleaning out the school district over the summer. Required teams of people working together to clean all classNameroom furnature, remove
                        it from the classNamerooms, clean &amp; wax the floors, then set the classNameroom back up how it was previously laid out.
                      </p>
                      <h5 className="feature-title title-margin">Awards</h5>
                      <p className="grey-text">
                        None offered for this job. The reward was coming back the next year if you did well enough.
                      </p>
                      <h5 className="feature-title title-margin">Progression</h5>
                      <p className="grey-text">
                        Learned about working in a team-based environment to accomplish tasks which are far too large to accomplish on my own.
                        I also learned humility. My co-workers here were amazing, some of the best, most hardworking people I've ever met. Just because
                        programming is a more in-demand field in job market, doesn't make it any more of less of a job than that of custodial staff.
                      </p>
                    </div>
                  </MDBTabPane>
                  <MDBTabPane tabId="3" role="tabpanel" className={`fade ${this.state.activeItem === "3" ? "show" : ""}`}>
                    <div className="tab-pane-container">
                      <h5 className="feature-title title-margin">Information</h5>
                      <p className="grey-text">
                        <strong>Starting Position:</strong> Worker <br/> 
                        <strong>Period:</strong> October 2011 - November 2012
                      </p>
                      <h5 className="feature-title title-margin">Responsibilities</h5>
                      <p className="grey-text">
                        Worked with a few other people to run the bounce houses over the weekends. We'd get a group of kids going,
                        inform them of the rules, monitor them in the bounce houses for a few minutes, then bring them back to their parents.
                      </p>
                      <h5 className="feature-title title-margin">Awards</h5>
                      <p className="grey-text">
                        None offered for this job. The reward was coming back the next year if you did well enough.
                      </p>
                      <h5 className="feature-title title-margin">Progression</h5>
                      <p className="grey-text">
                        This was my first actual job. It taught me the ins/outs of working for a company, having real responsibility,
                        and how to manage actually having extra money. This was an invaluable stepping stone for someone my age.
                      </p>
                    </div>
                  </MDBTabPane>
                </MDBTabContent>
              </Router>
            </div>
          </div>

        </section>
      </MDBAnimation>
    );
  }
}

export default Experience;