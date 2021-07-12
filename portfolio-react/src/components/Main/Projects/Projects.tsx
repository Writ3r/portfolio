import React, { Component } from "react";
import {  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBNav, MDBNavItem, MDBTabContent, MDBTabPane, MDBModal, MDBModalBody, MDBRow, MDBCol } from "mdbreact";
import MDBNavLink from "../../MDB/NavLink";
import { BrowserRouter as Router } from 'react-router-dom';

import pic from "../../../assets/clothescloset/ClothesClosetItem.png";
import pic2 from "../../../assets/clothescloset/ClothesClosetMainMenue.png";

import pic3 from "../../../assets/ksspe/LoginScreen.png";
import pic4 from "../../../assets/ksspe/KSSPEMainMenBetter.png";

import pic5 from "../../../assets/mailaway/swagger-endpoints.png";
import pic6 from "../../../assets/mailaway/create-account.png";
import pic7 from "../../../assets/mailaway/portainer.png";

import pic8 from "../../../assets/masterplan/About.png";
import pic9 from "../../../assets/masterplan/MasterDashboard.png";
import pic10 from "../../../assets/masterplan/Assets.png";

import ksspeERD from "../../../assets/ksspe/ERD.jpeg";
import ksspeSeq from "../../../assets/ksspe/KSSPECompletedSeqDiagrams.pdf";
import ksspeState from "../../../assets/ksspe/State.jpg";

import clothesSeq from "../../../assets/clothescloset/Team6-Sequence.pdf";
import clothesState from "../../../assets/clothescloset/stateDiagram.jpg";

const Zoom = require('react-reveal/Zoom');

interface Technology {
  name:string,
  desc:string
}

interface Information {
  projName:string,
  authors:string,
  period:string
}

interface ProjectInput {
  info:Information,
  overview:string,
  tech:Technology[],
  children:React.ReactNode,
  conclusion:string,
  pics:string[]
}

class Project extends React.Component<ProjectInput> {

  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <h5 className="feature-title">Information</h5>
        <p className="grey-text">
          <strong>Project Name:</strong> {this.props.info.projName} <br/>
          <strong>Authors:</strong> {this.props.info.authors}  <br/> 
          <strong>Period:</strong> {this.props.info.period}
        </p>
        <h5 className="feature-title title-margin">Overview</h5>
        <p className="grey-text">
          {this.props.overview}
        </p>
        <h5 className="feature-title title-margin">Technologies</h5>
        <p className="grey-text">
          {this.props.tech.map(tech => {
            return (
              <div><strong>{tech.name}:</strong> {tech.desc} <br/></div>
            );
          })}
        </p>
        <h5 className="feature-title title-margin">Resources</h5>
        <p>
          {this.props.children}
          <a className="custom-link" onClick={this.toggleModal}>
            <i className="fas fa-folder-open ml-2 animated pulse infinite"></i> Pictures
          </a>
          <PictureModal modal={this.state.modal} toggleModal={this.toggleModal}>
            {this.props.pics.map((pic, index) => {
              return (
                <MDBCarouselItem itemId={String(index + 1)}>
                  <img className="d-block w-100" src={pic} alt="..." />
                </MDBCarouselItem>
              );
            })}
          </PictureModal>
        </p>
        <h5 className="feature-title title-margin">Concluding Thoughts</h5>
        <p className="grey-text">
          {this.props.conclusion}
        </p>
      </div>
    );
  }
}

interface PictureModalInput {
  modal:boolean,
  toggleModal:Function
}

class PictureModal extends React.Component<PictureModalInput> {
  render() {
    return (
      // @ts-ignore   (ignore since MD bootstrap's modal has a bug with TS)
      <MDBModal isOpen={this.props.modal} toggle={this.props.toggleModal} size="lg" centered >
          <MDBModalBody>
            <MDBCarousel activeItem={1} length={React.Children.count(this.props.children)} showControls={true} showIndicators={true}>
              <MDBCarouselInner>
                {this.props.children}
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBModalBody>
      </MDBModal>
    );
  }
}

class Projects extends Component {

  state = {
    activePill: "1",
    modal: false
  };

  togglePills = (tab : string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (this.state.activePill !== tab) {
      this.setState({
        activePill: tab
      });
    }
  };
  
  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Zoom>
        <section id="projects" className="pageAnchor">
          <h2 className="my-5 h3 text-center">Projects</h2>
          <MDBRow>
            <MDBCol className="col-lg-12 col-md-12 px-4">
              <MDBRow>
                <Router>
                  <MDBCol md="3">
                    <MDBNav className="flex-column lucas-pills nav-pills projects-pills" aria-orientation="vertical">
                      <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activePill === "1"} onClick={this.togglePills("1")}>
                          <i className="fas fa-envelope mr-2 blue-text animated jello infinite"></i>Mailaway
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activePill === "2"} onClick={this.togglePills("2")}>
                          <i className="fas fa-chart-pie mr-2 cyan-text animated jello infinite"></i>Master Plan
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activePill === "3"} onClick={this.togglePills("3")}>
                          <i className="fas fa-volleyball-ball mr-2 animated jello infinite"></i>KSSPE Management
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activePill === "4"} onClick={this.togglePills("4")}>
                          <i className="fas fa-tshirt mr-2 indigo-text animated jello infinite"></i>Clothes Closet
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNav>
                  </MDBCol>
                  <MDBCol md="9">
                    <MDBTabContent activeItem={this.state.activePill}>
                      <MDBTabPane tabId="1" className={`fade ${this.state.activePill === "1" ? "show" : ""}`}>
                        <Project
                          info={{projName:"Mailaway", authors:"Lucas Wing", period:"April 2021 - PRESENT"}}
                          overview="API-powered throwaway email account service. Will have a minimal frontend, and developer-centric backend for
                          third-party integrators to use it in their own solutions. It's backed by Wildduck, a MongoDB backed extremely scalable email solution."
                          tech={[
                            {name:"Languages", desc:"Java, JavaScript, HTML, CSS"},
                            {name:"Frameworks", desc:"Spring-Boot, React, Bootstrap"},
                            {name:"Deployment", desc:"Docker"},
                            {name:"Documentation", desc:"OpenAPI"},
                            {name:"Database", desc:"MongoDB"},
                            {name:"Metrics", desc:"Prometheus/Grafana"}
                          ]}
                          conclusion="The primary purpose of this project is to learn how spring-boot works.
                          I doubt this'll ever kick off enough to actually be profitable, and that's alright.
                          If I can get real-world experience with spring-boot, I'm happy with the outcome."
                          pics={[pic5, pic6, pic7]}
                        >
                        </Project>
                      </MDBTabPane>
                      <MDBTabPane tabId="2" className={`fade ${this.state.activePill === "2" ? "show" : ""}`}>
                        <Project
                          info={{projName:"Master Plan", authors:"Lucas Wing", period:"January 2019 - January 2020"}}
                          overview="Financial projection service. Takes a user's current financial state, and projects it into the future.
                          Useful for testing different financial outcomes of your decisions, and not requiring experience with excel."
                          tech={[
                            {name:"Languages", desc:"PHP, Javascript, HTML, CSS"},
                            {name:"Frameworks", desc:"Bootstrap"},
                            {name:"Database", desc:"MySQL"},
                          ]}
                          conclusion="This project was my first major solo endevor to create an actually working webapp.
                            Was it optimal? No. Is there a lot of bugs? Probabily. But it served its purpose.
                            In the next few years at some point I'll likely come back and revamp this project.
                            The underlying idea is good, it just needs better execution and functionality."
                          pics={[pic8, pic9, pic10]}
                        >
                          <a className="custom-link" href="https://www.master-plan.me/" target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Website
                          </a><br/>
                        </Project>
                      </MDBTabPane>
                      <MDBTabPane tabId="3" className={`fade ${this.state.activePill === "3" ? "show" : ""}`}>
                      <Project
                          info={{projName:"KSSPE Department Inventory Management System", authors:"Lucas Wing, Matt Frichie, Nick Bernard, Liam Allport", period:"August 2018 - May 2019"}}
                          overview="Equipment reservation system for Brockport's KSSPE department. This was a senior project
                          done at the behest of our Computer Science department chair due to our excellent work on
                          Clothes Closet project to replace the current excel solution."
                          tech={[
                            {name:"Languages", desc:"Java"},
                            {name:"Frameworks", desc:"Custom MVC solution"},
                            {name:"Database", desc:"MySQL"},
                          ]}
                          conclusion="Our small team did well at this project. It was a great learning experience for us
                          to refine our Java skills before moving into the professional world."
                          pics={[pic3, pic4]}
                        >
                          <a className="custom-link" href="https://github.com/Writ3r/KSSPE-Project" target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Github
                          </a><br/>
                          <a className="custom-link" href={ksspeERD} target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> ERD
                          </a><br/>
                          <a className="custom-link" href="https://docs.google.com/document/d/1xK-V8XTjA9ArEFn9ioepw284b4NFE3bnGWWVYr8B2Yc/edit?usp=sharing" target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Use Cases
                          </a><br/>
                          <a className="custom-link" href={ksspeSeq} target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Sequence Diagrams
                          </a><br/>
                          <a className="custom-link" href={ksspeState} target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> State Diagram
                          </a><br/>
                        </Project>
                      </MDBTabPane>
                      <MDBTabPane tabId="4" className={`fade ${this.state.activePill === "4" ? "show" : ""}`}>
                      <Project
                          info={{projName:"Brockport Professional Clothes Closet", authors:"Lucas Wing, Nick Bernard, Matt Frichie, Liam Allport, Noah Tyler, Rolland Quentin, Nicholas Fontanet, Kevin Fortes", 
                            period:"August 2017 - June 2018"}}
                          overview="Clothing reservation system for Brockport's Professional Clothes closet. This was a class project which
                          spanned multiple semesters. The first semester we designed the project,
                          the second semester we went about actually implementing it with our teams."
                          tech={[
                            {name:"Languages", desc:"Java"},
                            {name:"Frameworks", desc:"Custom MVC solution"},
                            {name:"Database", desc:"MySQL"},
                          ]}
                          conclusion="This was a great first project to familiarize us with the inner-workings and design process
                          for client-side technologies. It was definetly rough by professional standards, but this
                          was primarily a learning experience."
                          pics={[pic, pic2]}
                        >
                          <a className="custom-link" href="https://github.com/ntyler1/ClothesClosetProject" target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Github
                          </a><br/>
                          <a className="custom-link" href="https://docs.google.com/document/d/1V_fU_oXI0yl9uo8K4Jrjk2z4EVXhlHpVYsNIxQbXJYs/edit?usp=sharing" target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Use Cases
                          </a><br/>
                          <a className="custom-link" href={clothesSeq} target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Sequence Diagrams
                          </a><br/>
                          <a className="custom-link" href={clothesState} target="_blank" rel="noreferrer">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> State Diagram
                          </a><br/>
                        </Project>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBCol>
                </Router>
              </MDBRow>
            </MDBCol>
          </MDBRow>           
        </section>
      </Zoom>
    );
  }
}

export default Projects;