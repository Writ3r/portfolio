import React, { Component } from "react";
import {  MDBContainer, MDBAnimation } from "mdbreact";

import pic from "../assets/work-731198_1920.jpg";

const MainContents = () => {
  return (
    <main>
        <MDBContainer>
          <MDBAnimation reveal type="fadeIn">
            <section id="portfolio" className="mt-5 anchor">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <img src={pic} className="img-fluid z-depth-1-half" alt="" />
                </div>
                <div className="col-md-6 mb-4">
                  <h3 className="h3 mb-3">Portfolio</h3>
                  <p>Here's a bit about <strong>myself</strong>, my <strong>projects</strong>, and my <strong>experience</strong>.</p>
                  <p>Everyone likes to show off a little right?</p>
                  <hr />
                  <p>
                    <strong>4</strong> years project experience,
                    <strong>2</strong> years enterprise experience,
                    <strong>24</strong> years of life experience.
                    <strong>Let's hope these numbers keep growing right?</strong>
                  </p>
                  <a target="_blank" href="https://docs.google.com/document/d/1XRYsCeIkxK-lsZblag1_hA39kfoHJFjL-Tlo2_ZkGwE/edit?usp=sharing" className="btn btn-grey btn-md">RESUME DOC
                    <i className="fas fa-download animated swing infinite ml-1"></i>
                  </a>
                  <a target="_blank" href="https://docs.google.com/document/d/1ca1rWlQpQJGOK2GYhp-mz5E8NWMic65b9PZSQFZu1Ss/edit?usp=sharing" className="btn btn-grey btn-md">COVER LETTER
                    <i className="fas fa-download animated swing infinite ml-1"></i>
                  </a>
                </div>
              </div>
            </section>
          </MDBAnimation>
        </MDBContainer>
    </main>
  );
}

export default MainContents;