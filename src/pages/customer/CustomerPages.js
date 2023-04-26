import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import CustomerContainer from "../../container/customer/CustomerContainer";
import CustomerHeader from "../../components/customer/CustomerHeader";

function CustomerPages() {
  return (
    <Container>
      <CustomerHeader />
      <CustomerContainer />
      <Footer />
    </Container>
  );
}
export default CustomerPages;
