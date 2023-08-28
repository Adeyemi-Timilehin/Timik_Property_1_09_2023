import { Container, Row, Col } from "react-bootstrap";
import Logo from "./Logo";
import Search from "./Search";
const Header = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <Col>
          <Logo />
        </Col>
        <Col>
          <Search />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
