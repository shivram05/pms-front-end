import React from "react";
import "../cssfile/property.css";
import Card from "react-bootstrap/Card";
const Property = (props) => {
  return (

    <div className="custom-card-content" onClick={props.clicked}>
      <Card style={{ width: "15rem"}}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text  className="text-limit">
            Some quick example text to build on the card sdfsdfsdfssdfdsfdsfdsfdsfsdfdsfdsfsdfd
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Property;
