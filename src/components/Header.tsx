import { Container, Row, Col, Button } from "react-bootstrap";
import Logo from "./logo";
import Search from "./Search";
const Header = () => {
  return (
    <Container className="mt-4">
      <Row>

        <Col>
          <Logo />
        </Col>
        <Col>
          <Button variant="outline-danger">Register</Button>{" "}
          <Button variant="danger">Login</Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
