import Layout from "./layout";
import image from "../../assets/1920.jpg";
import ImageSource from "./imageSource";
import { Row, Col, Container, Button } from "react-bootstrap";
import Search from "./Search";
import Rental from "./rental";
const Home = () => {
  return (
    <Layout>
      <Container fluid>
      <div className="position-relative">
      <ImageSource
          placeholder={image}
          alt="landing image"
          className="w-100 mb-3 h-auto"
        />
          <div className="text-white w-50 position-absolute top-50 start-50 translate-middle">
            <h2 className="fs-2 fw-bolder">Your Perfect House is Waiting for you </h2>
            <p className="p-4 fs-5">
              We get your covered to acquire new and rent apartment
            </p>
            <Search />
          </div>
         
        </div>
      <h2 className="text-center"> Explore Top Rentals in Nigeria</h2>
      <Row className="m-5">      
      <Rental onClick={()=>alert("test") } className="shadow-lg w-25 mx-2" placeimg={image} title={"New House"} children="This is the detail"/>
      </Row>
    
      </Container>
    </Layout>
  );
};

export default Home;
