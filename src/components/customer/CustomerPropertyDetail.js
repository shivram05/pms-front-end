import Button from "react-bootstrap/Button";
import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { FavoriteProperty } from "../favorite/FavoriteProperty";

function CustomerPropertyDetail() {
  const [showInquire, setShowInquire] = useState(false);
  const handleInquireClose = () => setShowInquire(false);
  const handleInquireShow = () => setShowInquire(true);
  const navigate = useNavigate();
  const [showOffer, setShowOffer] = useState(false);
  const handleOfferClose = () => setShowOffer(false);
  const handleOfferShow = () => setShowOffer(true);

  const params = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  const { favoriteItems, setfavoriteItems } = useContext(FavoriteProperty);

  console.log(favoriteItems);
  useEffect(() => {
    if (params.id) {
      axios.get("http://localhost:8080/api/v1/properties/" + params.id)
        .then(data => {
          setPropertyDetails(data.data);
          console.log(data.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [params.id])

  console.log(favoriteItems);
  // useEffect(() => {
  //   console.log(selectedFavorite);
  // }, [selectedFavorite]);
  //Inquery form
  const InquireModal = () => {
    return (
      <Modal show={showInquire} onHide={handleInquireClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inquery Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Label>Full Name</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Full Name*"
              required
              autoFocus
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
              <Form.Control type="text" placeholder="Phone* required" />
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
              autoFocus
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
          <Button variant="primary" onClick={handleOfferClose}>
            Place Offer
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  console.log(params.id);

  let propertyDetailsDisplay = null;
  if (params.id && propertyDetails) {
    propertyDetailsDisplay =
      <div>
        {/* <InquireModal />
      <PlaceOffer /> */}
        <div className="property-card">
          <div className="property-card__image">
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
              height="500"
              width="1300"
              alt="Example Image"
            />
            
            {favoriteItems.includes(params.id) ? (
              <button
                onClick={() => {
                  let removeSelected = favoriteItems;
                  removeSelected.splice(removeSelected.indexOf(params.id), 1);
                  setfavoriteItems([...removeSelected]);
                  console.log(favoriteItems);
                }}
              >
                Remove From Favorite{" "}
                <Badge pill bg="success">
                  {favoriteItems.length}
                </Badge>{" "}
              </button>
            ) : (
              <button
                onClick={() => {
                  setfavoriteItems([...favoriteItems, params.id]);
                  // console.log(favoriteItems);
                }}
              >
                Add To Favorite{" "}
                <Badge pill bg="success">
                  {favoriteItems.length}
                </Badge>{" "}
              </button>
            )}
            <Badge pill bg="dark">
              Place Offer
            </Badge>{" "}
          </div>

          <button onClick={()=>navigate("/favoriteproperty")}>Favorite Button</button>
          <div className="property-info">
            <p>Status : {propertyDetails.statusEnum}</p>
          </div>
          {propertyDetails.address && (
            <div className="property-details">

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
              <p>Has Tentent : {propertyDetails.propertyDetail.hasTenant ? 'Yes' : 'NO'}</p>
            </div>)}
        </div>
        <br />
        <div>
          <Button variant="info">
            Inquire
          </Button>{" "}
        </div>

        <div>
          <Button onClick={() => {
            navigate("/customer");
          }}>
            Back
          </Button>
        </div>
      </div>

  }
  return (
    propertyDetailsDisplay
  );
}

export default CustomerPropertyDetail;
