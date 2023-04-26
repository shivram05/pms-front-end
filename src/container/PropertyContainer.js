import React, { useEffect } from "react";
import Property from "../components/Property";
import { Link } from "react-router-dom";

const propertyData = [
  {
    id: 101,
    name: "test",
    description: "test deacripitn",
    price: "$1200",
    location: "test",
  },
  {
    id: 102,
    name: "test",
    description: "test deacripitn",
    price: "$1200",
    location: "test",
  },
  {
    id: 103,
    name: "test",
    description: "test deacripitn",
    price: "$1200",
    location: "test",
  },
  {
    id: 104,
    name: "test",
    description: "test deacripitn",
    price: "$1200",
    location: "test",
  },
];

const products = propertyData.map((p) => {
  return (
    <Link to={`property/${p.id}`} key={p.id} >
      <Property
        name={p.name}
        description={p.description}
        price={p.price}
        id={p.id}
      />
    </Link>
  );
});

// useEffect(() => {
//     fetchData();
//   }, []);
function PropertyContainer() {
  return (
    <>
      <div>
        <h1>Heading</h1>
        <div className="proterty-container">{products}</div>
      </div>
    </>
  );
}

export default PropertyContainer;
