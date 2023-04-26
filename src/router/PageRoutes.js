import { Routes, Route, Navigate } from "react-router";

import Dashboard from "../container/Dashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PropertyDetailsPage from "../pages/PropertyDetailsPage";
import ListOfPropertyDetailsPage from "../pages/ListOfPropertyDetailsPage";
import OwnerPages from "../pages/owner/OwnerPages";
import OfferPages from "../pages/owner/OfferPages";
import SellNewItem from "../pages/owner/SellNewItem";

export default function PageRoutes(props) {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="login" element={<LoginPage />} />
      <Route exact path="register" element={<RegisterPage />} />

      <Route exact path="property/:id" element={<PropertyDetailsPage />} />
      <Route exact path="buy" element={<ListOfPropertyDetailsPage />} />

      <Route exact path="buy/property/:id" element={<PropertyDetailsPage />} />

      <Route exact path="seller" element={<LoginPage />} />

      <Route exact path="seller/register" element={<RegisterPage />} />
      <Route exact path="owner" element={<OwnerPages />} />
      <Route
        path="login/register"
        // element={<Navigate replace to="/register" />}
      />

      <Route path="/owner" element={<OwnerPages />} />
      <Route path="owner/offer" element={<OfferPages />} />
      <Route path="owner/sellNewItem" element={<SellNewItem />} />
    </Routes>
  );
}
