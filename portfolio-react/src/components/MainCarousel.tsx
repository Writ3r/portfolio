/*
import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import MDBNavLink from "./MDB/NavLink";
*/
import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer } from
"mdbreact";
import MDBView from "./MDB/View"; 

import video from "../assets/Letter - 18003.mp4";
import video2 from "../assets/Blue - 27239_Slomo.mp4"
import video3 from "../assets/Network - 62965_Trim.mp4"

const CarouselPage = () => {
  return (
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <video className="video-intro" autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
              <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

                <div className="text-center white-text mx-5 wow fadeIn">
                  <h1 className="mb-4">
                    <strong>Keep It Simple, Silly</strong>
                  </h1>

                  <p className="animated pulse infinite">
                    <strong>isEven = (x % 2 == 0)</strong>
                  </p>

                  <p className="mb-4 d-none d-md-block">
                    <strong>Code does not care about complexity, but the maintainers do.</strong>
                  </p>

                  <a className="btn btn-outline-white btn-lg" href="https://github.com/Writ3r/portfolio" target="_blank">Source Code
                    <i className="fas fa-graduation-cap ml-2"></i>
                  </a>
                </div>

              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            <video className="video-intro" autoPlay loop muted>
                <source src={video2} type="video/mp4" />
              </video>
              <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

                <div className="text-center white-text mx-5 wow fadeIn">
                  <h1 className="mb-4">
                    <strong>Don't Repeat Yourself</strong>
                  </h1>

                  <p className="animated pulse infinite">
                    <strong>while ( true ) &#123; System.out.println("I Will Not Repeat My Code") &#125;;</strong>
                  </p>

                  <p className="mb-4 d-none d-md-block">
                    <strong>Computers are not people. Repetition is unnecessary.</strong>
                  </p>

                  <a className="btn btn-outline-white btn-lg" href="https://github.com/Writ3r/portfolio" target="_blank">Source Code
                    <i className="fas fa-graduation-cap ml-2"></i>
                  </a>
                </div>

              </div>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
            <video className="video-intro" autoPlay loop muted>
                <source src={video3} type="video/mp4" />
              </video>
              <div className="mask rgba-black-light d-flex justify-content-center align-items-center">

                <div className="text-center white-text mx-5 wow fadeIn">
                  <h1 className="mb-4">
                    <strong>Try, Try Again</strong>
                  </h1>

                  <p className="animated pulse infinite">
                    <strong>while ( ! ( succeed = try() ) );</strong>
                  </p>

                  <p className="mb-4 d-none d-md-block">
                    <strong>Computers are deterministic, people are not. Try, try again.</strong>
                  </p>

                  <a className="btn btn-outline-white btn-lg" href="https://github.com/Writ3r/portfolio" target="_blank">Source Code
                    <i className="fas fa-graduation-cap ml-2"></i>
                  </a>
                </div>

              </div>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default CarouselPage;