import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AllCustomers from "./AllCustomers";
import AllOwners from "./AllOwners";

const SuperUserContainer = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Customers</Accordion.Header>
        <Accordion.Body>
          <AllCustomers />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Owners</Accordion.Header>
        <Accordion.Body>
          <AllOwners />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SuperUserContainer;
