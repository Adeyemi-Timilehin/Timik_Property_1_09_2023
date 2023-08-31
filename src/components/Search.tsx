import { Button,Form ,Col, Row} from "react-bootstrap";

const Search=()=>{
    return(
        <Form className="w-100">
            <Row>
             <Col sm="8">
        <Form.Control type="text" placeholder="apartments in your visility" />
        </Col>
        <Col sm="2"><Button variant="danger">Search</Button></Col>

</Row>
        </Form>
    )

}
export default Search;