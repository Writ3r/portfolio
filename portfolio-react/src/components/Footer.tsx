import {  MDBAnimation, MDBFooter } from "mdbreact";
import MDBBtn from "./MDB/Button";

const Footer = () => {
  return (
    <MDBAnimation reveal type="fadeIn">
      <MDBFooter className="text-center font-small mt-4">
        <div className="pt-4">
          <MDBBtn className="btn-outline-white" href="https://docs.google.com/document/d/1XRYsCeIkxK-lsZblag1_hA39kfoHJFjL-Tlo2_ZkGwE/edit?usp=sharing" target="_blank" rel="noreferrer">
              Resume Doc <i className="fas fa-download ml-2 animated swing infinite"></i>
          </MDBBtn>
          <MDBBtn className="btn-outline-white" href="https://docs.google.com/document/d/1ca1rWlQpQJGOK2GYhp-mz5E8NWMic65b9PZSQFZu1Ss/edit?usp=sharing" target="_blank" rel="noreferrer">
            Cover Letter <i className="fas fa-download ml-2 animated swing infinite"></i>
          </MDBBtn>
        </div>
        <hr className="my-4" />
        <div className="pb-4">
          <a href="https://github.com/Writ3r" target="_blank" rel="noreferrer">
            <i className="fab fa-github mr-3"></i>
          </a>
          <a href="https://www.linkedin.com/in/lucas-wing-314894104/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin mr-3"></i>
          </a>
        </div>
        <div className="footer-copyright py-3">
          © 2021 Copyright:
          <a href="https://lucaswing.com" target="_blank" rel="noreferrer"> lucaswing.com </a>
        </div>
      </MDBFooter>
    </MDBAnimation>
  );
}

export default Footer;