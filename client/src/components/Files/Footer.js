import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="page-footer font-small lighten-5 pt-0">
      <div style={{ backgroundColor: "#f0f0f5" }}>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>My Camp</strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              <p>
                We are dedicated to helping you find your next great rental experience!
            </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              <p>
                <a href="#!" className="dark-grey-text">
                  Home
              </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">

                </a>
              </p>
              <p>
                <a href="#!" className="dark-grey-text">
                  Help
              </a>
              </p>
            </MDBCol>
            <MDBCol style={{ border: "none" }} md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
              <p>  <i className="fa fa-envelope mr-3" /> MyCamp@gmail.com
            </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div style={{ backgroundColor: "#9e9e9e" }} className="footer-copyright text-center py-3">
          <MDBContainer fluid>
          <p>  &copy; {new Date().getFullYear()} Copyright:{" "}  MyCamp </p>
          </MDBContainer>
        </div>
      </div>
    </MDBFooter>
  );
}

export default Footer;