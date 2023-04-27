import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "../../components/Footer";
import SuperUserContainer from "./SuperAdminContainer";

const SuperUser = () => {
  return (
    <Container>
      <Header />
      
      <SuperUserContainer />
      <Footer />
    </Container>
  );
};

export default SuperUser;
