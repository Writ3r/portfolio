import React, { Component } from "react";
import {  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBAnimation, MDBNav, MDBNavItem, MDBTabContent, MDBTabPane, MDBModal, MDBModalBody } from "mdbreact";
import MDBNavLink from "./MDB/NavLink";
import { BrowserRouter as Router } from 'react-router-dom';

import pic from "../assets/clothescloset/ClothesClosetItem.png";
import pic2 from "../assets/clothescloset/ClothesClosetMainMenue.png";

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
      <MDBAnimation reveal type="fadeIn">
        <section id="projects" className="anchor">
          <h2 className="my-5 h3 text-center">Projects</h2>
          <div className="row wow fadeIn">
            <div className="col-lg-12 col-md-12 px-4">
              <div className="row">
                <Router>
                  <div className="col-md-3">
                    <MDBNav className="flex-column lucas-pills nav-pills projects-pills" aria-orientation="vertical">
                      <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activePill === "1"} onClick={this.togglePills("1")}>
                          Mailaway
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activePill === "2"} onClick={this.togglePills("2")}>
                          Master Plan
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activePill === "3"} onClick={this.togglePills("3")}>
                          KSSPE Management
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink link to="#" active={this.state.activePill === "4"} onClick={this.togglePills("4")}>
                          Clothes Closet
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNav>
                  </div>
                  <div className="col-md-9">
                    <MDBTabContent activeItem={this.state.activePill}>
                      <MDBTabPane tabId="1" className={`fade ${this.state.activePill === "1" ? "show" : ""}`}>
                        <h5 className="feature-title">Information</h5>
                        <p className="grey-text">
                          <strong>Project Name:</strong> Mailaway <br/>
                          <strong>Authors:</strong> Lucas Wing  <br/> 
                          <strong>Period:</strong> April 2021 - PRESENT
                        </p>
                        <h5 className="feature-title title-margin">Overview</h5>
                        <p className="grey-text">
                          API-powered throwaway email account service. Will have a minimal frontend, and developer-centric backend for
                          third-party integrators to use it in their own solutions. It's backed by Wildduck, a MongoDB backed extremely scalable email solution.
                        </p>
                        <h5 className="feature-title title-margin">Technologies</h5>
                        <p className="grey-text">
                          <strong>Languages:</strong> Java, JavaScript, HTML, CSS <br/>
                          <strong>Frameworks:</strong> Spring-Boot, React, Bootstrap <br/>
                          <strong>Deployment:</strong> Docker <br/>
                          <strong>Documentation:</strong> OpenAPI <br/>
                          <strong>Database:</strong> MongoDB <br/>
                          <strong>Metrics:</strong> Prometheus/Grafana
                        </p>
                        <h5 className="feature-title title-margin">Resources</h5>
                        <p>
                          <a className="custom-link" onClick={this.toggleModal}>
                            <i className="fas fa-folder-open ml-2 animated pulse infinite"></i> Pictures
                          </a>
                        </p>
                        <h5 className="feature-title title-margin">Concluding Thoughts</h5>
                        <p className="grey-text">
                          The primary purpose of this project is to learn how spring-boot works.
                          I doubt this'll ever kick off enough to actually be profitable, and that's alright.
                          If I can get real-world experience with spring-boot, I'm happy with the outcome.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId="2" className={`fade ${this.state.activePill === "2" ? "show" : ""}`}>
                        <h5 className="feature-title">Information</h5>
                        <p className="grey-text">
                          <strong>Project Name:</strong> Master Plan <br/>
                          <strong>Authors:</strong> Lucas Wing  <br/> 
                          <strong>Period:</strong> January 2019 - January 2020
                        </p>
                        <h5 className="feature-title title-margin">Overview</h5>
                        <p className="grey-text">
                          Financial projection service. Takes a user's current financial state, and projects it into the future.
                          Useful for testing different financial outcomes of your decisions, and not requiring experience with excel.
                        </p>
                        <h5 className="feature-title title-margin">Technologies</h5>
                        <p className="grey-text">
                          <strong>Languages:</strong> PHP, Javascript, HTML, CSS <br/>
                          <strong>Frameworks:</strong> Bootstrap <br/>
                          <strong>Database:</strong> MySQL <br/>
                        </p>
                        <h5 className="feature-title title-margin">Resources</h5>
                        <p>
                          <a className="custom-link" href="https://www.master-plan.me/" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Website
                          </a><br/>
                          <a className="custom-link" data-toggle="modal" data-target=".master-plan-pics-model">
                            <i className="fas fa-folder-open ml-2 animated pulse infinite"></i> Pictures
                          </a>
                        </p>
                        <h5 className="feature-title title-margin">Concluding Thoughts</h5>
                        <p className="grey-text">
                          This project was my first major solo endevor to create an actually working webapp.
                          Was it optimal? No. Is there a lot of bugs? Probabily. But it served its purpose.
                          In the next few years at some point I'll likely come back and revamp this project.
                          The underlying idea is good, it just needs better execution and functionality.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId="3" className={`fade ${this.state.activePill === "3" ? "show" : ""}`}>
                        <h5 className="feature-title">Information</h5>
                        <p className="grey-text">
                          <strong>Project Name:</strong> KSSPE Department Inventory Management System<br/>
                          <strong>Authors:</strong> Lucas Wing, Matt Frichie, Nick Bernard, Liam Allport<br/>
                          <strong>Period:</strong> August 2018 - May 2019
                        </p>
                        <h5 className="feature-title title-margin">Overview</h5>
                        <p className="grey-text">
                          Equipment reservation system for Brockport's KSSPE department. This was a senior project
                          done at the behest of our Computer Science department chair due to our excellent work on
                          Clothes Closet project to replace the current excel solution.
                        </p>
                        <h5 className="feature-title title-margin">Technologies</h5>
                        <p className="grey-text">
                          <strong>Languages:</strong> Java <br/>
                          <strong>Frameworks:</strong> Custom MVC solution <br/>
                          <strong>Database:</strong> MySQL <br/>
                        </p>
                        <h5 className="feature-title title-margin">Resources</h5>
                        <p>
                          <a className="custom-link" href="https://github.com/Writ3r/KSSPE-Project" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Github
                          </a><br/>
                          <a className="custom-link" href="./assets/ksspe/ERD.jpeg" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> ERD
                          </a><br/>
                          <a className="custom-link" href="https://docs.google.com/document/d/1xK-V8XTjA9ArEFn9ioepw284b4NFE3bnGWWVYr8B2Yc/edit?usp=sharing" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Use Cases
                          </a><br/>
                          <a className="custom-link" href="./assets/ksspe/KSSPECompletedSeqDiagrams.pdf" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Sequence Diagrams
                          </a><br/>
                          <a className="custom-link" href="./assets/ksspe/State.jpg" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> State Diagram
                          </a><br/>
                          <a className="custom-link" data-toggle="modal" data-target=".ksspe-pics-model">
                            <i className="fas fa-folder-open ml-2 animated pulse infinite"></i> Pictures
                          </a>
                        </p>
                        <h5 className="feature-title title-margin">Concluding Thoughts</h5>
                        <p className="grey-text">
                          Our small team did well at this project. It was a great learning experience for us
                          to refine our Java skills before moving into the professional world.
                        </p>
                      </MDBTabPane>
                      <MDBTabPane tabId="4" className={`fade ${this.state.activePill === "4" ? "show" : ""}`}>
                        <h5 className="feature-title">Information</h5>
                        <p className="grey-text">
                          <strong>Project Name:</strong> Brockport Professional Clothes Closet<br/>
                          <strong>Authors:</strong> Lucas Wing, Nick Bernard, Matt Frichie, Liam Allport, Noah Tyler, Rolland Quentin, Nicholas Fontanet, Kevin Fortes<br/>
                          <strong>Period:</strong> August 2017 - June 2018
                        </p>
                        <h5 className="feature-title title-margin">Overview</h5>
                        <p className="grey-text">
                          Clothing reservation system for Brockport's Professional Clothes closet. This was a class project which
                          spanned multiple semesters. The first semester we designed the project,
                          the second semester we went about actually implementing it with our teams.
                        </p>
                        <h5 className="feature-title title-margin">Technologies</h5>
                        <p className="grey-text">
                          <strong>Languages:</strong> Java <br/>
                          <strong>Frameworks:</strong> Custom MVC solution <br/>
                          <strong>Database:</strong> MySQL <br/>
                        </p>
                        <h5 className="feature-title title-margin">Resources</h5>
                        <p>
                          <a className="custom-link" href="https://github.com/ntyler1/ClothesClosetProject" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Github
                          </a><br/>
                          <a className="custom-link" href="https://docs.google.com/document/d/1V_fU_oXI0yl9uo8K4Jrjk2z4EVXhlHpVYsNIxQbXJYs/edit?usp=sharing" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Use Cases
                          </a><br/>
                          <a className="custom-link" href="./assets/clothescloset/Team6-Sequence.pdf" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> Sequence Diagrams
                          </a><br/>
                          <a className="custom-link" href="./assets/clothescloset/stateDiagram.jpg" target="_blank">
                            <i className="fas fa-link ml-2 animated pulse infinite"></i> State Diagram
                          </a><br/>
                          <a className="custom-link" data-toggle="modal" data-target=".clothes-closet-pics-model">
                            <i className="fas fa-folder-open ml-2 animated pulse infinite"></i> Pictures
                          </a>
                        </p>
                        <h5 className="feature-title title-margin">Concluding Thoughts</h5>
                        <p className="grey-text">
                          This was a great first project to familiarize us with the inner-workings and design process
                          for client-side technologies. It was definetly rough by professional standards, but this
                          was primarily a learning experience.
                        </p>
                      </MDBTabPane>
                    </MDBTabContent>
                  </div>
                </Router>
              </div>
            </div>
          </div>           
        </section>

        {/* @ts-ignore */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggleModal} size="lg" centered >
            <MDBModalBody>
              <MDBCarousel activeItem={1} length={2} showControls={true} showIndicators={true}>
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <img className="d-block w-100" src={pic} alt="..." />
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <img className="d-block w-100" src={pic2} alt="..." />
                  </MDBCarouselItem>
                </MDBCarouselInner>
              </MDBCarousel>
            </MDBModalBody>
        </MDBModal>

        <div className="modal fade ksspe-pics-model" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div id="carousel-ksspe-pics" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="./assets/ksspe/LoginScreen.PNG" alt="..." />
                    <div className="carousel-caption" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./assets/ksspe/KSSPEMainMenBetter.PNG" alt="..." />
                    <div className="carousel-caption" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carousel-ksspe-pics" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-ksspe-pics" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade mailaway-pics-model" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div id="carousel-mailaway-pics" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="./assets/mailaway/swagger-endpoints.PNG" alt="..." />
                    <div className="carousel-caption">
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./assets/mailaway/create-account.PNG" alt="..." />
                    <div className="carousel-caption">
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./assets/mailaway/portainer.PNG" alt="..." />
                    <div className="carousel-caption">
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carousel-mailaway-pics" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-mailaway-pics" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade master-plan-pics-model" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div id="carousel-master-plan-pics" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="./assets/masterplan/About.PNG" alt="..." />
                    <div className="carousel-caption">
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./assets/masterplan/MasterDashboard.PNG" alt="..." />
                    <div className="carousel-caption">
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="./assets/masterplan/Assets.PNG" alt="..." />
                    <div className="carousel-caption">
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carousel-master-plan-pics" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel-master-plan-pics" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </MDBAnimation>
    );
  }
}

export default Projects;