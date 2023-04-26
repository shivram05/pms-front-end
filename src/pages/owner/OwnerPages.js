import React from "react";
import { Container } from "react-bootstrap";
import OwnerContainer from "../../container/owner/OwnerContainer";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function OwnerPages() {
  return (
    <Container>
      <Header />
      <OwnerContainer />
      <Footer />
    </Container>
  );
}

export default OwnerPages;
