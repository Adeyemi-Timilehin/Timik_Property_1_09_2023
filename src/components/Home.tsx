import Layout from "./layout";
import ImageSource from "./ImageSource";
import { Row, Col, Container, Button } from "react-bootstrap";
const Home = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
          <div className="w-50">
          <h4 className="fs-4">Your Perfect House is Waiting for you </h4>
            <p className="">We get your covered to acquire  new and rent  apartment</p>
          </div>
            <div className="btn">
            <Button variant="outline-danger">Register</Button>{' '}
            <Button variant="danger">Login</Button>{' '}

            </div>
          </Col>
          <Col>
            <ImageSource
              placeholder={"../assets/house.png"}
              alt="landing Page photo"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
