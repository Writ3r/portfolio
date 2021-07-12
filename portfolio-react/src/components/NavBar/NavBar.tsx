import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer} from "mdbreact";
import MDBNavLink from "../MDB/NavLink";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {

  state = {
    isOpen: false,
    activeNav: "home",
    atTop: true
  };

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  eleIsInView = (el:any) => {
    const box = el.getBoundingClientRect();
    return box.top <= window.innerHeight && box.bottom >= 0;
  }

  // determine if last ele in view (edge case of last nav tab not triggering active)
  lastFooterEleInView = () => {
    let footerInView = false;
    const footer = document.querySelector("footer");
    if (footer) {
      const lastChild = footer.lastElementChild
      if (lastChild) {
        footerInView = true ? footer && this.eleIsInView(footer) : false
      }
    }
    return footerInView
  }

  /*
  * Handles user scroll event to:
  * 1. Determine location on page, and scrollspy based on that
  * 2. if at top of page, change style on carousel to be transparent.
  */
  handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let activeNav = this.state.activeNav;

    let lastEleInView = this.lastFooterEleInView()
    var section = document.querySelectorAll(".pageAnchor");
    section.forEach(function(e, i) {
      if (e instanceof HTMLElement) {
        if (e.offsetTop - 100 <= scrollTop || (lastEleInView && i == section.length - 1)) {
          activeNav = e.id
        }
      }
    })

    this.setState({
      atTop: true ? (scrollTop === 0) : false,
      activeNav: activeNav
    });
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  togglePills = (location: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.moveToLocation(location)
  };

  moveToLocation = (location: string) => {
    const element = document.getElementById(location);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop - 99 : 0
      });
    }, 100);
  }

  render() {
    return (
      <Router>
        <MDBNavbar color="unique-color-dark" dark expand="md" className={`fixed-top scrolling-navbar ${this.state.atTop ? "" : "top-nav-collapse"}`}>
          <MDBContainer>
            <MDBNavbarBrand href="#">
              <strong className="white-text">Lucas Wing</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink link to="#home" active={this.state.activeNav === "home"} onClick={this.togglePills("home")} className="lucas-nav-bar-item">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#portfolio" active={this.state.activeNav === "portfolio"} onClick={this.togglePills("portfolio")} className="lucas-nav-bar-item">Portfolio</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#about" active={this.state.activeNav === "about"} onClick={this.togglePills("about")} className="lucas-nav-bar-item">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#experience" active={this.state.activeNav === "experience"} onClick={this.togglePills("experience")} className="lucas-nav-bar-item">Experience</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#skills" active={this.state.activeNav === "skills"} onClick={this.togglePills("skills")} className="lucas-nav-bar-item">Skills</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#projects" active={this.state.activeNav === "projects"} onClick={this.togglePills("projects")} className="lucas-nav-bar-item">Projects</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav className="nav-flex-icons" right>
                <MDBNavItem>
                  <a className="nav-link" href="https://www.linkedin.com/in/lucas-wing-314894104/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a href="https://github.com/Writ3r" className="nav-link border border-light rounded waves-effect waves-light" target="_blank" rel="noreferrer">
                    <i className="fab fa-github mr-2"></i>GitHub
                  </a>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </Router>
      );
    }
}

export default NavbarPage;