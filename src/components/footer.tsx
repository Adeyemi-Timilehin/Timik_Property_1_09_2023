import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";
import Logo from "./Logo";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <div>
      <Container fluid className="bgColor fontSize">
        <Row>
          <Col md={6} lg={3} sm={12}>
            <Logo />

            <p>Close to perfect Home</p>
            <div className="social_icon">
              <a href="https://www.facebook.com/adeyemitimmy">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/hadeymike">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com/in/adeyemitimmy">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="address">14, Jemigbon Street, Apollo Estate</div>
          </Col>
          <Col md={6} lg={3} sm={12}>
            <ul className="list-type">
              <li>Home</li>
              <li>For Sell</li>
              <li>For rent</li>
              <li>New Property</li>
            </ul>
          </Col>
          <Col md={6} lg={3} sm={12}>
            <ul className="list-type">
              <li>Career</li>
              <li>Blog</li>
              <li>FAQS</li>
              <li>Terms & Condition</li>
            </ul>
          </Col>
          <Col md={6} lg={3} sm={12}>
            <ul className="list-type">
              <li>Privacy & Policy</li>
              <li>Contact Us</li>
              <li>About Us</li>
              
            </ul>
          </Col>
          <hr/>
          <p className="text-center">Timik &copy; {year}</p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
