import Button from "react-bootstrap/Button";
import React, { useContext, useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { useNavigate, useParams } from "react-router";
import { FavoriteProperty } from "../components/favorite/FavoriteProperty";
import axios from "axios";

function PropertyDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});

  const {favoriteProperty, setFavoriteProperty} = useContext(FavoriteProperty);
  const login = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (params.propertyId) {
      axios.get("http://localhost:8080/api/v1/properties/" + params.propertyId)
        .then(data => {
          setPropertyDetails(data.data);
          console.log(data.data);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [params.id])

  let propertyDetailsDisplay = null;
  if (params.id && propertyDetails) {
    propertyDetailsDisplay =
      <div>
        {/* <InquireModal />
      <PlaceOffer /> */}
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
            <Badge pill bg="dark" onClick={login}>
              Place Offer
            </Badge>{" "}
          </div>
          <div className="property-info">
            <p>Status : {propertyDetails.statusEnum}</p>
          </div>
          {propertyDetails.address && (
            <div className="property-details">

              <p>Street : {propertyDetails.address.street}</p>
              <p>City :  {propertyDetails.address.city}</p>
              <p>State : {propertyDetails.address.state}</p>
              <p>Zip :   {propertyDetails.address.zip} </p>
              <p>Country : {propertyDetails.address.country}</p>
              <p>Property Type : {propertyDetails.propertyDetail.propertyType}</p>
            </div>)}

          {propertyDetails.propertyDetail && (
            <div className="property-details">
              <p>size : {propertyDetails.propertyDetail.lotSize}</p>
              <p>homeSize : {propertyDetails.propertyDetail.homeSize}</p>
              <p>Year : {propertyDetails.propertyDetail.yearBuild}</p>
              <p>Number Of Rooms : {propertyDetails.propertyDetail.roomNum}</p>
              <p>Number of Full Bathrooms : {propertyDetails.propertyDetail.fullBathroomNum}</p>
              <p>Number of Partial Bathrooms : {propertyDetails.propertyDetail.partialBathroomNum}</p>
            </div>)}
          {propertyDetails.propertyDetail && (
            <div className="property-details">
              <p>Property Price : {propertyDetails.propertyDetail.propertyPrice}</p>
              <p>MortgageBalance : {propertyDetails.propertyDetail.mortgageBalance}</p>
              <p>Home Condition : {propertyDetails.propertyDetail.homeCondition}</p>
              <p>Has Tentent : {propertyDetails.propertyDetail.hasTenant? 'Yes' : 'NO'}</p>
            </div>)}
        </div>
        <br />
        <div>
          <Button variant="info" onClick={login}>
            Inquire
          </Button>{" "}
        </div>

        <div>
        <Button onClick={()=>{
          navigate("/");
        }}>
            Back
          </Button>
        </div>
      </div>
  }   
  return (
    propertyDetailsDisplay
  );
}

export default PropertyDetail;
