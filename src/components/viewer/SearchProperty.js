import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import Property from "../Property";
import '../../cssfile/property.css';
import { Link } from "react-router-dom";

function SearchProperty() {

  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);

  const [flag, setFlag] = useState(false);

  const [formState, setFormState] = useState({
    propertyType: '',
    numberOfRooms: '',
    homeCondition: '',
    zipCode: '',
    priceRange: '',
  });

  const filterHandler = (e) => {
    e.preventDefault();
    setFlag(!flag)
    // console.log(formState)
  }

  const filteredFormState = Object.fromEntries(
    Object.entries(formState).filter(([key, value]) => value !== '')
  );

  const fetchSerachProperty = () => {
    axios.get("http://localhost:8080/api/v1/properties/search/", {
      params: {
        ...filteredFormState
      }
    }
    )
      .then(res => {
        setProperties(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message());
      })
  }

  useEffect(() => {
    if (flag)
      fetchSerachProperty();
  }, [flag])


  const searchList = properties.map(
    p => {
      return (
        <div key={p.propertyId} className="proterty-container">
          <Link to={`${p.propertyId}`}>
            <Property propertyType={p.propertyDetail.propertyType} 
                      propertyLocationState={p.address.state}
                      propertyLocationZip = {p.address.zip}
                      propertyStatus = {p.statusEnum}
                      propertyImage = {p.propertyImages.imageLocation}
            /></Link>
        </div>
      )

    })
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select aria-label="Property Type" defaultValue={0}
                  onChange={e => setFormState(prevState => ({
                    ...prevState,
                    propertyType: e.target.value
                  }))}>
                  <option value="">Select Property Type</option>
                  <option value="SINGLE_FAMILY">Single Family</option>
                  <option value="MULTI_FAMILY">Multi Family</option>
                  <option value="CONDO">Condo</option>
                  <option value="MOBILE">Mobile</option>
                  <option value="LAND">Land</option>
                  <option value="FARM">FARM</option>
                  <option value="OTHER">Other</option>
                </Form.Select>
              </Form.Group>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Select aria-label="Room Numbers" defaultValue={0}
                  onChange={e => setFormState(prevState => ({
                    ...prevState,
                    numberOfRooms: e.target.value
                  }))}>
                  <option value="">Select Number Of Rooms</option>
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
                <Form.Select aria-label="Home Condition" defaultValue={0}
                  onChange={e => setFormState(prevState => ({
                    ...prevState,
                    homeCondition: e.target.value
                  }))}>
                  <option value="">
                    Select Home Condition
                  </option>
                  <option value="PERFECT">Perfect</option>
                  <option value="EXCELLENT">Excellent</option>
                  <option value="GOOD">Good</option>
                  <option value="NEED_MINOR_WORK">Need Minor Work</option>
                  <option value="NEED_MAJOR_WORK">Need Major Work</option>
                </Form.Select>
              </Form.Group>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="zip" placeholder="Search By Zip" onChange={(e) => setFormState({ ...formState, zip: e.target.value })} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="price" placeholder="Search By Price" onChange={(e) => setFormState({ ...formState, propertyPrice: e.target.value })} />
            </Form.Group>
          </Col>

          <Col>
            <Button variant="primary" type="submit" onClick={filterHandler}>
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <div>

        {searchList}

      </div>
    </div>


  );
}

export default SearchProperty;
