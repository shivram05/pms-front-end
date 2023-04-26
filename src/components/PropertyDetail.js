import React from "react";

function PropertyDetail() {
  return (
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
  );
}

export default PropertyDetail;
