import React from "react";
import "../cssfile/property.css";
import Card from "react-bootstrap/Card";
const Property = (props) => {
  return (

    <div className="custom-card-content" onClick={props.clicked}>
      <Card style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src=""
          // src={"props.propertyImage"}
        />
        <Card.Body>
          <Card.Title>Status : {props.propertyStatus}</Card.Title>
          <Card.Text className="text-limit" >
            Property Type : {props.propertyType} <br></br>
            Located : {props.propertyLocationState} {props.propertyLocationZip}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );



  
};

export default Property;
