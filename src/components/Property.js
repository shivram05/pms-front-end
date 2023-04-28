import React from "react";
import "../cssfile/property.css";
import Card from "react-bootstrap/Card";
const Property = (props) => {
  return (

    <div className="custom-card-content" onClick={props.clicked}>
      <Card style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          // src={"props.propertyImage"}
        />
        <Card.Body>
          <Card.Title>Status : {props.propertyStatus}</Card.Title>
          <Card.Text className="text-limit" >
            Property Type : {props.propertyType} <br></br>
            Located : {props.propertyLocationState}, {props.propertyLocationZip}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Property;
