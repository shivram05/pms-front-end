import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchProperty() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Select aria-label="Property Type">
                <option>Select Property Type</option>
                <option value="Single Family">Single Family</option>
                <option value="Multi Family">Multi Family</option>
                <option value="Condo">Condo</option>
                <option value="Mobile">Mobile</option>
                <option value="Land">Land</option>
                <option value="Farm">Farm</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Select aria-label="Room Numbers">
                <option>Select Number Of Rooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5+">5+</option>
              </Form.Select>
            </Form.Group>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Select aria-label="Home Condition">
                <option value="" disabled selected>
                  Select Home Condition
                </option>
                <option value="Perfect">Perfect</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Need Minor Work">Need Minor Work</option>
                <option value="Need Major Work">Need Major Work</option>
              </Form.Select>
            </Form.Group>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="zip" placeholder="Search By Zip" />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="price" placeholder="Search By Price" />
          </Form.Group>
        </Col>

        <Col>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchProperty;
