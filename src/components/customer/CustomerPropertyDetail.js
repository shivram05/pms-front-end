import Button from "react-bootstrap/Button";
import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import toast from "react-hot-toast";
import axios from "axios";
import {useParams} from 'react-router';
import { useNavigate } from 'react-router-dom';


function CustomerPropertyDetail() {
  const [showInquire, setShowInquire] = useState(false);
  const handleInquireClose = () => setShowInquire(false);
  const handleInquireShow = () => setShowInquire(true);

  const [showOffer, setShowOffer] = useState(false);
  const handleOfferClose = () => setShowOffer(false);
  const handleOfferShow = () => setShowOffer(true);



//HANDLE OFFER SUBMIT
  const inputPriceRef = useRef();
  const params = useParams();
  const nav = useNavigate();

  console.log(params.id)
  const handleOfferSubmit = (event) => {
    event.preventDefault();
    const inputPriceValue = inputPriceRef.current.value;
    const data = {
      "submissionDate": new Date(),
      "offeredPrice": inputPriceValue,
      "user": {
        "userId": 6
      },
      "property": {
        "propertyId": params.id
      }
    };
    axios.post('http://localhost:8080/api/v1/offers/customer/saveOffer', data)
      .then((res) => {
        console.log(res.data);
        toast.success("Your offer has been sent to the owner.")
        nav("/customer");
      }).catch((err) => {
        console.log("Error", err.message());
      })

  };

//HANDLE INQUERY SUBMIT
const inputFullNameRef = useRef();
const inputEmailRef = useRef();
const inputPhoneRef = useRef();
const inputMessageRef = useRef();
const paramsInq = useParams();
  const handleInquireSubmit = (event) => {
    event.preventDefault();
    const fullName = inputFullNameRef.current.value;
    const email= inputEmailRef.current.value;
    const phone= inputPhoneRef.current.value;
    const message = inputMessageRef.current.value;

   console.log(fullName);
   console.log(email);
   console.log(phone);
   console.log(message);

    const data ={
      "fullName": fullName,
      "email": email,
      "contact": phone,
      "message": message,
      "messageTime": new Date(),
      "property": {
          "propertyId": paramsInq.id
      }
  };

  console.log(data);
  axios.post('http://localhost:8080/api/v1/enquiry', data)
  .then((response) => {
    console.log(response.data);
    toast.success("Your enquiry has been sent.");
    nav("/customer");
  
  })
  .catch((err) => {
    console.log("Error", err)
  })
  };

  //Inquery form
  const InquireModal = () => {
    return (
      <Modal show={showInquire} onHide={handleInquireClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inquery Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              required
              type="text"
              placeholder="Full Name*"
              autoFocus
              ref={inputFullNameRef}
            />{" "}
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                ref={inputEmailRef}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control type="text" placeholder="Phone*" required ref={inputPhoneRef} />
              <br />
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ask a question"
                required
                ref={inputMessageRef}
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
          <Button variant="primary" onClick={handleInquireSubmit}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  //Function for Place Offer form

  const PlaceOffer = () => {
    return (
      <Modal show={showOffer} onHide={handleOfferClose}>
        <Modal.Header closeButton>
          <Modal.Title>Place Offer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
              type="number"
              placeholder="Offer Price**"

              required
              ref={inputPriceRef}
            />{" "}
            <br />
            <Modal.Footer>
              <Button variant="primary" type="submit" onClick={handleOfferSubmit}>
                Place Offer
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>

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

        <div className="property-details">
          <p>Street :</p>
          <p>City : </p>
          <p>State : </p>
          <p>Zip : </p>
          <p>Country : </p>
          <p>Property Type :</p>
        </div>

        <div className="property-details">
          <p>size : </p>
          <p>homeSize : </p>
          <p>Year : </p>
          <p>Number Of Rooms : </p>
          <p>Number of Full Bathrooms : </p>
          <p>Number of Partial Bathrooms :</p>
        </div>

        <div className="property-details">
          <p>Property Price : </p>
          <p>MortgageBalance : </p>
          <p>Home Condition : </p>
          <p>Has Tentent : </p>
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

export default CustomerPropertyDetail;


