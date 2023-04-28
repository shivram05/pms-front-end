import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import PageRoutes from "./router/PageRoutes";

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <PageRoutes />
        </BrowserRouter>
      </Container>
      <Footer />
    </>
  );
}

export default App;
