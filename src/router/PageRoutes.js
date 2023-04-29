import { Routes, Route, Navigate } from "react-router";

import Dashboard from "../container/Dashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PropertyDetailsPage from "../pages/PropertyDetailsPage";
import ListOfPropertyDetailsPage from "../pages/ListOfPropertyDetailsPage";
import OwnerPages from "../pages/owner/OwnerPages";
import CustomerPages from "../pages/customer/CustomerPages";
import { ResetPassword } from "../components/resetpassword/ResetPassword";

import OfferPages from "../pages/owner/OfferPages";
import SellNewItem from "../pages/owner/SellNewItem";
import CustomerPropertyDetailsPage from "../components/customer/CustomerPropertyDetailsPage";
import { Toaster } from "react-hot-toast";
import SuperUser from "../pages/admin/SuperUser";
import SelectedFavorite from "../components/favorite/SelectedFavorite";
import { FavoriteProperty } from "../components/favorite/FavoriteProperty";
import FavoriteSection from "../components/favorite/FavoriteSection";

export default function PageRoutes(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="login" element={<LoginPage />} />
        <Route exact path="/:id" element={<PropertyDetailsPage />} />
        <Route exact path="register" element={<RegisterPage />} />

      <Route exact path="property/:id" element={<CustomerPropertyDetailsPage />} />
      <Route
        exact
        path="customer/property/:id"
        element={<CustomerPropertyDetailsPage />}
      />

      {/* <Route exact path="customers"  */}

        <Route exact path = "customer/:id" element={<CustomerPropertyDetailsPage />}/>
        <Route exact path = "/favoriteproperty" element = {<FavoriteSection/>}/>
        <Route exact path="buy" element={<ListOfPropertyDetailsPage />} />

        <Route
          exact
          path="buy/property/:id"
          element={<PropertyDetailsPage />}
        />

        <Route exact path="seller" element={<LoginPage />} />

        <Route exact path="seller/register" element={<RegisterPage />} />

        <Route
          path="login/register"
          element={<Navigate replace to="/register" />}
        />

        <Route path="owner" element={<OwnerPages />} />

      <Route path="customer" element={<CustomerPages />} />
      <Route path="/redirecttocustomer"  element={<Navigate replace to="/customer" />}/>

        <Route path="reset" element={<ResetPassword />} />

        <Route exact path="owner" element={<OwnerPages />} />
        <Route
          path="login/register"
        // element={<Navigate replace to="/register" />}
        />

        <Route path="/owner" element={<OwnerPages />} />
        <Route path="owner/offer" element={<OfferPages />} />
        <Route path="owner/sellNewItem" element={<SellNewItem />} />
        <Route path="admin" element={<SuperUser />} />
      </Routes>
      <Toaster />
    </>
  );
}
