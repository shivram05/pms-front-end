import Button from "react-bootstrap/Button";
import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import { useNavigate, useParams } from "react-router";
import { FavoriteProperty } from "./FavoriteProperty";
import axios from "axios";

function PropertyDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  const [favoriteProperty, setFavoriteProperty] = useContext(FavoriteProperty);
  const login = () => {
    navigate("/login");
  };

  const [showInquire, setShowInquire] = useState(false);
  const handleInquireClose = () => setShowInquire(false);
  const handleInquireShow = () => setShowInquire(true);

  const [showOffer, setShowOffer] = useState(false);
  const handleOfferClose = () => setShowOffer(false);
  const handleOfferShow = () => setShowOffer(true);

  // Inquery form
  const InquireModal = () => {
    return (
      <Modal show={showInquire} onHide={handleInquireClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inquery Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Label>Full Name</Form.Label> */}
            <Form.Control type="text" placeholder="Full Name*" autoFocus required /> <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Phone</Form.Label> */}
              <Form.Control type="text" placeholder="Phone*" />
              <br />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ask a question"
                required
              />
            </Form.Group>
            <p>
              <em>
                By proceeding, you consent to receive calls and texts at the
                number you provided, including marketing by autodialer and
                prerecorded and artificial voice, and email
              </em>
            </p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleInquireClose}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  //Function for Place Order form

  const PlaceOffer = () => {
    return (
      <Modal show={showOffer} onHide={handleOfferClose}>
        <Modal.Header closeButton>
          <Modal.Title>Place Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Label>Full Name</Form.Label> */}
            <Form.Control
              type="number"
              placeholder="Offer Price*"
              required
            />{" "}
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Phone</Form.Label> */}
              <Form.Control type="text" placeholder="Phone*" required />
              <br />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={"/"}>
            Place Offer
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      <InquireModal />
      <PlaceOffer />
      <div className="property-card">
        <div className="property-card__image">
          <img
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            height="500"
            width="1300"
            alt="Example Image"
          />
          <Badge pill bg="success">
            Add To Favorite
          </Badge>{" "}
          <Badge pill bg="dark" onClick={handleOfferShow}>
            Place Offer
          </Badge>{" "}
        </div>
        <div className="property-info">
          <p>Status : </p>
        </div>

              <p>Street : {propertyDetails.address.street}</p>
              <p>City :  {propertyDetails.address.city}</p>
              <p>State : {propertyDetails.address.state}</p>
              <p>Zip :   {propertyDetails.address.zip} </p>
              <p>Country : {propertyDetails.address.country}</p>
              <p>Property Type : {propertyDetails.propertyDetail.propertyType}</p>
            </div>)}

          {propertyDetails.propertyDetail && (
            <div className="property-details">
              <p>size : {propertyDetails.propertyDetail.lotSize}</p>
              <p>homeSize : {propertyDetails.propertyDetail.homeSize}</p>
              <p>Year : {propertyDetails.propertyDetail.yearBuild}</p>
              <p>Number Of Rooms : {propertyDetails.propertyDetail.roomNum}</p>
              <p>Number of Full Bathrooms : {propertyDetails.propertyDetail.fullBathroomNum}</p>
              <p>Number of Partial Bathrooms : {propertyDetails.propertyDetail.partialBathroomNum}</p>
            </div>)}
          {propertyDetails.propertyDetail && (
            <div className="property-details">
              <p>Property Price : {propertyDetails.propertyDetail.propertyPrice}</p>
              <p>MortgageBalance : {propertyDetails.propertyDetail.mortgageBalance}</p>
              <p>Home Condition : {propertyDetails.propertyDetail.homeCondition}</p>
              <p>Has Tentent : {propertyDetails.propertyDetail.hasTenant? 'Yes' : 'NO'}</p>
            </div>)}
        </div>
        <br />
        <div>
          <Button variant="info" onClick={login}>
            Inquire
          </Button>{" "}
        </div>

        <div>
        <Button onClick={()=>{
          navigate("/");
        }}>
            Back
          </Button>
        </div>
      </div>
      <br />
      <div>
        <Button variant="info" onClick={handleInquireShow}>
          Inquire
        </Button>{" "}
      </div>
    </div>
  );
}

export default PropertyDetail;
