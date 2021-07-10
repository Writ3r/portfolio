import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBAnimation } from "mdbreact";
import MDBView from "./MDB/View";

import video from "../assets/Letter.webm";
import video2 from "../assets/Blue.webm";
import video3 from "../assets/Network.webm"

interface VideoInput {
  videoUrl: string;
}

const VideoBackground = (props:VideoInput)  => {
  return (
    <video className="video-intro" autoPlay loop muted>
      <source src={props.videoUrl} type="video/mp4" />
    </video>
  );
}

interface CarouselCenterInnerInput {
  saying:string,
  code:string,
  explination:string
}

const CarouselCenterInner = (props:CarouselCenterInnerInput) => {
  return (
    <div className="mask rgba-black-light d-flex justify-content-center align-items-center">
      <MDBAnimation type="fadeIn">
        <div className="text-center white-text mx-5">
          <h1 className="mb-4">
            <strong>{props.saying}</strong>
          </h1>
          <p className="animated pulse infinite">
            <strong>{props.code}</strong>
          </p>
          <p className="mb-4 d-none d-md-block">
            <strong>{props.explination}</strong>
          </p>
          <a className="btn btn-outline-white btn-lg" href="https://github.com/Writ3r/portfolio" target="_blank">Source Code
            <i className="fas fa-graduation-cap ml-2"></i>
          </a>
        </div>
      </MDBAnimation>
    </div>
  );
}

const CarouselPage = () => {
  return (
      <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="carouselPage">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <VideoBackground videoUrl={video}></VideoBackground>
              <CarouselCenterInner
                saying="Keep It Simple, Silly"
                code="isEven = (x % 2 == 0)"
                explination="Code does not care about complexity, but the maintainers do."
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <VideoBackground videoUrl={video2}></VideoBackground>
              <CarouselCenterInner
                saying="Don't Repeat Yourself"
                code='while ( true ) { System.out.println("I Will Not Repeat My Code") };'
                explination="Computers are not people. Repetition is unnecessary."
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <VideoBackground videoUrl={video3}></VideoBackground>
              <CarouselCenterInner
                saying="Try, Try Again"
                code='while ( ! ( succeed = try() ) );'
                explination="Computers are deterministic, people are not. Try, try again."
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
  );
}

export default CarouselPage;