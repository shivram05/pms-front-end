import React from "react";
import { Container } from "react-bootstrap";
import OwnerContainer from "../../container/owner/OwnerContainer";
import Footer from "../../components/Footer";
import Header from "./Header";

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
