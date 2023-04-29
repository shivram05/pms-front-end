import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../cssfile/features.css";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import "./PropertyCard.css"

function ViewerPropertyCard({id, image, price, address, propertyStatus, propertyType }) {
  const handleSellerClick = () => {
    console.log("seller clicked");
  };

  return (
    <>
      <div>
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src={image}
          />
          <Card.Body>
            <div className="badge-info">
              <h6>
                <Badge pill bg="primary">
                  {propertyType}
                </Badge>{' '}
              </h6>
              <h6>
                <Badge pill bg="info">
                  {propertyStatus}
                </Badge>{' '}
              </h6>
            </div>
            <Card.Title>${price}</Card.Title>
            <Card.Text className="text-limit">
              {address.street}<br />
              {address.city}
            </Card.Text>
            <b><Link to ={`/viewerproperty/${id}`}>
              <Button variant="primary">Detail</Button>
            </Link></b>
          </Card.Body>
        </Card>
        <span> &nbsp; &nbsp; </span>
       
      </div>
    </>
  );
}

export default ViewerPropertyCard;
