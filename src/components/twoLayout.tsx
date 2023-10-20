import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ImageSource from "./ImageSource";
import image from "../../sd/ec597249.jpg";
const  TwoLayout=()=> {
  return (
    <Container className="my-5">
      <h5>FOR RENTALS</h5>
      <Row>
        <Col className="jumbotron jumbotron-fluid">
          <p className="lead">
            Search thousands of up-to-date property listings on our easy-to-use
            website Narrow down your options by choosing what's most important
            to you ,such as Property type, Price range, location and more{" "}
          </p>
          <Button className="btn-outline-danger bg-danger text-light p-2 rent">
            Start Search
          </Button>
        </Col>
        <Col>
          <ImageSource placeholder={image} alt="rent" className="img-fluid" />
        </Col>
      </Row>
      <h5>FOR LANDLORD</h5>
      <Row>
        <Col>
          <ImageSource placeholder={image} alt="rent" className="img-fluid" />
        </Col>
        <Col className="jumbotron jumbotron-fluid">
          <h1 className="">Simple and Streamlined rental management</h1>
          <p className="lead">
            List your rental property by posting your property for potential
            renters
          </p>
          <Button className="bg-danger rounded  text-light p-2 border-0">
            Add listing
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default TwoLayout