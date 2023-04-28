import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "../../components/Footer";
import SuperUserContainer from "./SuperUserContainer";
import "./SuperUser.css";

const SuperUser = () => {
  return (
    <Container>
      <Header />
      <SuperUserContainer />
    </Container>
  );
};

export default SuperUser;
