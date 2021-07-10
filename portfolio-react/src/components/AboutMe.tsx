import React, { Component } from "react";
import {  MDBAnimation } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBAnimation reveal type="fadeIn">
      <section id="aboutMe" className="anchor">
        <h3 className="h3 text-center mb-5">About Me</h3>
        <div className="row wow fadeIn">
          <div className="col-lg-6 col-md-12 px-4">
            <div className="row about-me-item">
              <div className="col-1 mr-3">
                <i className="fas fa-code fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Engineer</h5>
                <p className="grey-text">Engineering new and interesting projects is my jam. It's satisfying turning an idea into a design.</p>
              </div>
            </div>
            <div className="row about-me-item">
              <div className="col-1 mr-3">
                <i className="fas fa-code-branch fa-2x blue-text"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Developer</h5>
                <p className="grey-text">Developing code to fit project specifications is delightful. I love implementing new and interesting designs.
                </p>
              </div>
            </div>
            <div className="row about-me-item">
              <div className="col-1 mr-3">
                <i className="fas fa-graduation-cap fa-2x cyan-text"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Problem Solver</h5>
                <p className="grey-text">
                  Problems exist to be solved. My goal is to help that process along.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row about-me-item">
              <div className="col-1 mr-3">
                <i className="fas fa-gamepad fa-2x indigo-text"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Gamer</h5>
                <p className="grey-text">Destiny, League of Legends, Minecraft, etc. Have played, and love them all.</p>
              </div>
            </div>
            <div className="row about-me-item">
              <div className="col-1 mr-3">
                <i className="fas fa-hiking fa-2x blue-text"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Hiker</h5>
                <p className="grey-text">Mountains, valleys, deserts, fields. Hiking is my preferred method to experience it all.
                </p>
              </div>
            </div>
            <div className="row about-me-item">
              <div className="col-1 mr-3">
                <i className="fas fa-walking fa-2x cyan-text"></i>
              </div>
              <div className="col-10">
                <h5 className="feature-title">Walker</h5>
                <p className="grey-text">
                  Turn on some music, chillax, and take a few mile walk. That's the life I like to live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MDBAnimation>
  );
}

export default AboutMe;