import Layout from "./layout";
import image from "../../assets/1920.jpg";
import ImageSource from "./imageSource";
import { Row, Container } from "react-bootstrap";
import Search from "./Search";
import Rental from "./rental";
import TwoLayout from "./twoLayout";
import {data} from "../data/data";
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
            <h2 className="fs-2 fw-bolder">
              Your Perfect House is Waiting for you{" "}
            </h2>
            <p className="p-4 fs-5">
              We get your covered to acquire new and rent apartment
            </p>
            <Search />
          </div>
        </div>
        <h2 className="text-center"> Explore Top Rentals in Nigeria</h2>
        <Row>
         
          {data.map((item)=>
               <Rental key={item.id}
               onClick={() => alert("test")}
               className="shadow-lg w-25"
               placeimg={item.url}
               title={item.title}
               children={item.description}
             />
          )}
     </Row>
        
        <TwoLayout />
        <p>Search over 1 million listings including apartments, houses, condos, and townhomes available for rent. You’ll find your next home, in any style you prefer.</p>
      </Container>
    </Layout>
  );
};

export default Home;
