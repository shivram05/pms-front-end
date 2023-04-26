import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../cssfile/features.css";
import ListOfPropertyDetailsPage from "../pages/ListOfPropertyDetailsPage";
import { Link } from "react-router-dom";

function FeatureSection() {
  const handleSellerClick = () => {
    console.log("seller clicked");
  };

  return (
    <>
      <h1 className="feature-title-content">Heading</h1>
      <div className="card-container">
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          />
          <Card.Body>
            <Card.Title>Buy a home</Card.Title>
            <Card.Text className="text-limit">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/buy">
              <Button variant="primary">Browse</Button>
            </Link>
          </Card.Body>
        </Card>
        <span> &nbsp; &nbsp; </span>
        <div>
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            />
            <Card.Body>
              <Card.Title>Sell a home</Card.Title>
              <Card.Text className="text-limit">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Link to="/seller">
                <Button variant="primary">Browse</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
