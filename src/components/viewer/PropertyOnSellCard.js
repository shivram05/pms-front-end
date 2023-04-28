import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../cssfile/features.css";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import "./PropertyOnSellCard.css";
import { useNavigate } from "react-router-dom";
function PropertyOnSellCard({
  id,
  image,
  price,
  address,
  propertyStatus,
  propertyType,
}) {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <div className="badge-info">
              <h6>
                <Badge pill bg="primary">
                  {propertyType}
                </Badge>{" "}
              </h6>
              <h6>
                <Badge pill bg="info">
                  {propertyStatus}
                </Badge>{" "}
              </h6>
            </div>
            <Card.Title>${price}</Card.Title>
            <Card.Text className="text-limit">
              {address.street}
              <br />
              {address.city}
            </Card.Text>
            <Link to={`/owner/offer`}>
              <Button>Offer</Button>
            </Link>
          </Card.Body>
        </Card>
        <span> &nbsp; &nbsp; </span>
      </div>
    </>
  );
}

export default PropertyOnSellCard;
