import React, { useEffect } from "react";
import ListOfProperty from "../components/ListOfProperty";
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
  {
    id: 104,
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
  {
    id: 104,
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
      <ListOfProperty
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
function ListOfPropertyContainer() {
  return (
    <>
      <div>
        <div className="proterty-container">{products}</div>
      </div>
    </>
  );
}

export default ListOfPropertyContainer;
