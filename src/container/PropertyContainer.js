import React, { useState, useEffect } from "react";
import Property from "../components/Property";
import { Link } from "react-router-dom";
import axios from "axios";
import PropertyCard from "../components/PropertyCard/PropertyCard";

function PropertyContainer() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/properties/')
      .then((response) => {
        console.log("Response data: " + response.data)
        setProperties(response.data)
      })
      .catch((error) => { console.log("Error", error) })
  }, [])

  const fetchData = properties.map((s) => {
    console.log(s);
  });
  return (
    <div>
      <h1>Property List</h1>
      <ul className="property-list">
        <div className="card-container">
          {properties.map((property) => (
            <li>
              {property.address && property.statusEnum && property.propertyDetail.propertyType &&
                <PropertyCard
                  image={property.propertyImages[0].imageLocation}
                  price={property.propertyDetail.propertyPrice}
                  address={property.address}
                  propertyStatus={property.statusEnum}
                  propertyType={property.propertyDetail.propertyType}
                  id={property.propertyDetail.pdId}
                />
              }
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}



export default PropertyContainer;
