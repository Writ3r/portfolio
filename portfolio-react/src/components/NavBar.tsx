import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer} from "mdbreact";
import MDBNavLink from "./MDB/NavLink";
import { BrowserRouter as Router } from 'react-router-dom';

/*
NOTES:
  - The nav is PILLS to allow for scrollspy and avoid needing mdb pro
  - isActive={() => false} is used to bypass auto-active on NavLink when pointing at self.
  - handleScroll fixes the scroll to function without mdb pro
*/

class NavbarPage extends Component {

  state = {
    isOpen: false,
    activePill: 1,
    atTop: true
  };

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.setState({
      atTop: true ? (scrollTop === 0) : false
    });
  }
  
  togglePills = (tab : number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (this.state.activePill !== tab) {
      this.setState({
        activePill: tab
      });
    }
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
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
                  <MDBNavLink to="#!" isActive={() => false} active={this.state.activePill === 1} onClick={this.togglePills(1)} className="lucas-nav-bar-item">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#hello" isActive={() => false} active={this.state.activePill === 2} onClick={this.togglePills(2)}>Portfolio</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" isActive={() => false} active={this.state.activePill === 3} onClick={this.togglePills(3)}>About</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" isActive={() => false} active={this.state.activePill === 4} onClick={this.togglePills(4)}>Experience</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" isActive={() => false} active={this.state.activePill === 5} onClick={this.togglePills(5)}>Skills</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" isActive={() => false} active={this.state.activePill === 6} onClick={this.togglePills(6)}>Projects</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav className="nav-flex-icons" right>
                <MDBNavItem>
                  <MDBNavLink to="#!"><i className="fab fa-linkedin"></i></MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!" className="border border-light rounded waves-effect waves-light"><i className="fab fa-github mr-2"></i>Github</MDBNavLink>
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