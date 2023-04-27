import React from "react";
import { useNavigate } from "react-router";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
const ListOfPropertyOnSell = (props) => {
  const navigate = useNavigate();
  function showOffer() {
    return navigate("offer");
  }

  function sellNewItem() {
    return navigate("sellNewItem");
  }
  function seeAllAdds() {
    return navigate("/");
  }

  return (
    <>
      {showOffer()}
      <div className="custom-card-content" onClick={props.clicked}>
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text className="text-limit">
              Some quick example text to build on the card
              sdfsdfsdfssdfdsfdsfdsfdsfsdfdsfdsfsdfd
            </Card.Text>
            <Button onClick={showOffer}>Offer</Button>
          </Card.Body>
        </Card>
      </div>
      <Button onClick={sellNewItem}>Place New Item For Sale</Button>
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Button onClick={seeAllAdds} margi>
        See other Advertisement
      </Button>
    </>
  );
};

export default ListOfPropertyOnSell;
