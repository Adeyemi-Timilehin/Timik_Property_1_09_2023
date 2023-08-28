import { Button,Form ,Col, Row} from "react-bootstrap";

const Search=()=>{
    return(
        <Form className="d-flex justify-content-end">
            <Row>
             <Col sm="8">
        <Form.Control type="text" placeholder="Search" />
        </Col>
        <Col sm="2"><Button variant="danger">Search</Button></Col>

</Row>
        </Form>
    )

}
export default Search;