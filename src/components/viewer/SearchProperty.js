import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchProperty() {
    return (


        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Select aria-label="Property Type">
                                <option>Select Property Type</option>
                                <option value="1">Single Family</option>
                                <option value="2">Multi Family</option>
                                <option value="3">Condo</option>
                                <option value="4">Mobile</option>
                                <option value="5">Land</option>
                                <option value="6">Farm</option>
                                <option value="7">Other</option>
                            </Form.Select>
                        </Form.Group>
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="zip" placeholder="Zip Code" />
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