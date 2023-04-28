import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import OfferContainer from "../../container/owner/OfferContainer";
import Header from "./Header";

function OfferPages() {
  return (
    <Container>
      <Header />
      
      <OfferContainer />
      <Footer />
    </Container>
  );
}

export default OfferPages;
