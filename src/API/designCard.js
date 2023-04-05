import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "tachyons";

export default function Basic({
  id,
  name,
  position,
  rating,
  followers,
  articles,
}) {
  return (
    <div className="tc dib br3 pa3 ma2  bw2 shadow-5">
     
        <MDBContainer>
          <MDBRow className="justify-content-center">
            <MDBCol className="mt-5">
              <MDBCard style={{ borderRadius: "15px" }}>
                <MDBCardBody className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        style={{ width: "180px", borderRadius: "10px" }}
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                        alt="Generic placeholder image"
                        fluid
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <MDBCardTitle>{name}</MDBCardTitle>
                      <MDBCardText>{position}</MDBCardText>

                      <div
                        className="d-flex justify-content-start rounded-3 p-2 mb-2"
                        style={{ backgroundColor: "#efefef" }}
                      >
                        <div>
                          <p className="small text-muted mb-1">articles</p>
                          <p className="mb-0">{articles}</p>
                        </div>
                        <div className="px-3">
                          <p className="small text-muted mb-1">followers</p>
                          <p className="mb-0">{followers}</p>
                        </div>
                        <div>
                          <p className="small text-muted mb-1">rating</p>
                          <p className="mb-0">{rating}</p>
                        </div>
                      </div>
                      <div className="d-flex pt-1">
                        <MDBBtn outline className="me-1 flex-grow-1">
                          Chat
                        </MDBBtn>
                        <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
   
    </div>
  );
}
