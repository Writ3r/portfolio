import React, { Component } from "react";
import {  MDBAnimation, MDBRow, MDBCol } from "mdbreact";
import MDBBtn from "./MDB/Button";

import pic from "../assets/work-731198_1920.jpg";

function secondsDiff(d1:Date, d2:Date) {
  let secDiff = Math.floor( ( d2.getTime() - d1.getTime()) / 1000 );
  return secDiff;
}

class Portfolio extends Component {
  
  static birthday = new Date(1997, 1, 18)
  static workStartDate = new Date(2019, 6, 3)
  static projectStartDate = new Date(2017, 8, 1)
  interval?:NodeJS.Timeout

  state = { 
    secondsCoding: secondsDiff(Portfolio.projectStartDate, new Date())
  };

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ secondsCoding: this.secondsDiff(Portfolio.projectStartDate, new Date()) }), 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  secondsDiff = (d1:Date, d2:Date) => {
    let secDiff = Math.floor( ( d2.getTime() - d1.getTime()) / 1000 );
    return secDiff;
  }

  yearsDiff = (d1:Date, d2:Date) => {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff =  date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
  }

  render() {
      const currTime = new Date();
      return (
      <MDBAnimation reveal type="fadeIn">
        <section id="portfolio" className="mt-5 pageAnchor">
          <MDBRow>
            <MDBCol className="col-md-6 mb-4">
              <img src={pic} className="img-fluid z-depth-1-half" alt="" />
            </MDBCol>
            <MDBCol className="col-md-6 mb-4">
              <h3 className="h3 mb-3">Portfolio</h3>
              <p>Here's a bit about <strong>myself</strong>, my <strong>projects</strong>, and my <strong>experience</strong>.</p>
              <p>Everyone likes to show off a little right?</p>
              <hr />
              <p>
                <strong>{this.yearsDiff(Portfolio.projectStartDate, currTime)}</strong> years project experience,
                <strong> {this.yearsDiff(Portfolio.workStartDate,  currTime)}</strong> years enterprise experience,
                <strong> {this.yearsDiff(Portfolio.birthday,  currTime)}</strong> years of life experience.
                <strong> Let's hope these numbers keep growing right?</strong>
              </p>
              <p>
              <strong>{this.state.secondsCoding}</strong> seconds coding projects is not enough!
              </p>
              <MDBBtn target="_blank" href="https://docs.google.com/document/d/1XRYsCeIkxK-lsZblag1_hA39kfoHJFjL-Tlo2_ZkGwE/edit?usp=sharing" color="grey">
                RESUME DOC <i className="fas fa-download animated swing infinite ml-1"></i>
              </MDBBtn>
              <MDBBtn target="_blank" href="https://docs.google.com/document/d/1ca1rWlQpQJGOK2GYhp-mz5E8NWMic65b9PZSQFZu1Ss/edit?usp=sharing" color="grey">
                COVER LETTER <i className="fas fa-download animated swing infinite ml-1"></i>
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBAnimation>
    );
  }
}

export default Portfolio;