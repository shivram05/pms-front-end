import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import PropertyOnSellCard from "./PropertyOnSellCard";

const ListOfPropertyOnSell = (props) => {
  const navigate = useNavigate();
  //make userid  dynamic
  // const params = useParams();
  // console.log(params.id);
  const [propertiesOnSell, setPropertiesOnSell] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/properties/owner/" + 1) //1 is Owner
      .then((response) => {
        setPropertiesOnSell(response.data);
        console.log(response.data).catch((error) => {
          console.log(error);
        });
      });
  }, []);

  function showOffer() {
    // return navigate("offer");
  }

  function sellNewItem() {
    return navigate("sellNewItem");
  }
  function seeAllAdds() {
    return navigate("/");
  }

  return (
    <>
      {/* {showOffer()}
      <div className="custom-card-content" onClick={props.clicked}>
        <tbody>
          {propertiesOnSell.map((property) => {
            <tr key={property.propertyDetail.pdId}>
              <td>PropertyId={property.propertyDetail.pdId}</td>
              <td>{property.name}</td>
                <td>{property.email}</td>
                
            </tr>;
          })}
          <Card style={{ width: "15rem" }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
            />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text className="text-limit">arjun</Card.Text>
              <Button onClick={showOffer}>Offer</Button>
            </Card.Body>
          </Card>
        </tbody>
      </div>
      <Button onClick={sellNewItem}>Place New Item For Sale</Button>
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      <Button onClick={seeAllAdds} margi>
        See other Advertisement
      </Button> */}

      <div>
        <h1>Property List</h1>
        <ul className="property-list">
          <div className="card-container">
            {propertiesOnSell.map((property) => (
              <li key={property.propertyDetail.pdId}>
                <PropertyOnSellCard
                  image={property.propertyImages[0].imageLocation}
                  price={property.propertyDetail.propertyPrice}
                  address={property.address}
                  propertyStatus={property.statusEnum}
                  propertyType={property.propertyDetail.propertyType}
                  id={property.propertyDetail.pdId}
                />
              </li>
            ))}
          </div>
        </ul>
        <Button onClick={sellNewItem}>Place New Item For Sale</Button>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <Button onClick={seeAllAdds} margi>
          See other Advertisement
        </Button>
      </div>
    </>
  );
};

export default ListOfPropertyOnSell;
