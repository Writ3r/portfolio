import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer} from "mdbreact";
import MDBNavLink from "./MDB/NavLink";
import { BrowserRouter as Router, Link } from 'react-router-dom';

/*
NOTES:
  - The nav is PILLS to allow for scrollspy and avoid needing mdb pro
  - handleScroll fixes the scroll to function without mdb pro
*/

class NavbarPage extends Component {

  state = {
    isOpen: false,
    activePill: "1",
    atTop: true
  };

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  isInView(el:any) {
    const box = el.getBoundingClientRect();
    return box.top <= window.innerHeight && box.bottom >= 0;
  }

  handleScroll = () => {
    //scroll pos in page
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // @ts-ignore
    var footer = document.querySelector("footer").lastElementChild;
    var footerInView = true ? footer && this.isInView(footer) : false

    // scrollspy since mdbootstrap requires pro version
    var section = document.querySelectorAll(".pageAnchor");
    section.forEach(function(e) {
      if (e instanceof HTMLElement) {
        if (e.offsetTop - 100 <= scrollTop || footerInView && e.id === "projects") {
          var ele = document.querySelector('.lucas-nav-bar-item.active')
          if (ele) {
            ele.className = ele.className.replace("active", "")
          }
          var ele2 = document.querySelector('a[href*=' + e.id + ']')
          if (ele2) {
            ele2.className += " active"
          }
        }
      }
    })

    // carousel at top of page set class
    this.setState({
      atTop: true ? (scrollTop === 0) : false
    });
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  togglePills = (tab : string, location: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.moveToLocation(location)
    /*
    if (this.state.activePill !== tab) {
      this.setState({
        activePill: tab
      });
    } */
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
              <MDBNavbarNav className="nav-pills" left>
                <MDBNavItem>
                  <MDBNavLink link to="#home" active={this.state.activePill === "1"} onClick={this.togglePills("1", "home")} className="lucas-nav-bar-item">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#portfolio" active={this.state.activePill === "2"} onClick={this.togglePills("2", "portfolio")} className="lucas-nav-bar-item">Portfolio</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#about" active={this.state.activePill === "3"} onClick={this.togglePills("3", "about")} className="lucas-nav-bar-item">About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#experience" active={this.state.activePill === "4"} onClick={this.togglePills("4", "experience")} className="lucas-nav-bar-item">Experience</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#skills" active={this.state.activePill === "5"} onClick={this.togglePills("5", "skills")} className="lucas-nav-bar-item">Skills</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink link to="#projects" active={this.state.activePill === "6"} onClick={this.togglePills("6", "projects")} className="lucas-nav-bar-item">Projects</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav className="nav-flex-icons" right>
                <MDBNavItem>
                  <a className="nav-link" href="https://www.linkedin.com/in/lucas-wing-314894104/" target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a href="https://github.com/Writ3r" className="nav-link border border-light rounded waves-effect waves-light"
                    target="_blank">
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