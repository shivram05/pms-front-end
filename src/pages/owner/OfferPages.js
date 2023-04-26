import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import OfferContainer from "../../container/owner/OfferContainer";

function OfferPages() {
  return (
    <Container>
      <Header />
      <OfferContainer />
      {/* <Footer /> */}
    </Container>
  );
}

export default OfferPages;
