import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import PageRoutes from "./router/PageRoutes";
import { useState } from "react";
import { FavoriteProperty } from "./components/favorite/FavoriteProperty";

function App() {

  const [favoriteItems, setfavoriteItems] = useState([]);

  return (
    <Container>
            <FavoriteProperty.Provider value={{ favoriteItems, setfavoriteItems }}>

      <BrowserRouter>
        <PageRoutes/>
      </BrowserRouter>
      </FavoriteProperty.Provider>
    </Container>
  );
}

export default App;
