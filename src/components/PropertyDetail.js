import Button from 'react-bootstrap/Button';
import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function PropertyDetail() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const InquireModal= () =>{
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inquery Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          {/* <Form.Label>Full Name</Form.Label> */}
              <Form.Control type="text" placeholder='Full Name*'/> <br />

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Phone</Form.Label> */}
              <Form.Control type="text" placeholder='Phone*'/><br />
              <Form.Control as="textarea" rows={3} placeholder='Ask a question' />
            </Form.Group>
            
              <p>
                <em>By proceeding, you consent to receive calls and texts at the number you provided, including marketing by autodialer and prerecorded and artificial voice, and email
                </em>
                </p>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  return (
    <div>
      <InquireModal />
      <div className="property-card">
        <div className="property-card__image">
          <img
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            height="500"
            width="1300"
            alt="Example Image"
          />
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


      <div>
      <Button variant="info" onClick={
        handleShow
      }>Inquire</Button>{' '}
      </div>
    </div>

  );
}

export default PropertyDetail;
