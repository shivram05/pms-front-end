import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import Header from "./Header";
import Footer from "../../components/Footer";
import axios from "axios";
const SellNewItem = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    city: "",
    state: "",
    zip: "",
    country: "",
    size: "",
    homeSize: "",
    year: "",
    noOfRooms: "",
    noOfFullBathrooms: "",
    noOfPartialBathrooms: "",
    homeCondition: "",
    hasTenent: "",
    propertyPrice: "",
    mortgageBalance: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/properties/", formData)
      .then((response) => {
        console.log(response);
        toast.success("Item placed for Sell");
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/owner");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const back = () => {
    navigate("/owner");
  };

  return (
    <>
      <Header />
      <div>
        SellNewItem
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <h5>Address</h5>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              className="form-control"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              className="form-control"
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code:</label>
            <input
              type="text"
              className="form-control"
              name="zip"
              id="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              className="form-control"
              name="country"
              id="country"
              required
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <h5>Property Details</h5>
            <label htmlFor="size">Size:</label>
            <input
              type="text"
              className="form-control"
              name="size"
              id="size"
              value={formData.size}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="homeSize">Home Size:</label>
            <input
              type="text"
              className="form-control"
              name="homeSize"
              id="homeSize"
              value={formData.homeSize}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year Build:</label>
            <input
              type="text"
              className="form-control"
              name="year"
              id="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="noOfRooms">No of Rooms:</label>
            <input
              type="text"
              className="form-control"
              name="noOfRooms"
              id="noOfRooms"
              value={formData.noOfRooms}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="noOfFullBathrooms">No of Full Bathrooms:</label>
            <input
              type="text"
              className="form-control"
              name="noOfFullBathrooms"
              id="noOfFullBathrooms"
              value={formData.noOfFullBathrooms}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="noOfPartialBathrooms">
              No of Partial Bathrooms:
            </label>
            <input
              type="text"
              className="form-control"
              name="noOfPartialBathrooms"
              id="noOfPartialBathrooms"
              value={formData.noOfPartialBathrooms}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="homeCondition">Condition of Home:</label>
            <input
              type="text"
              className="form-control"
              name="homeCondition"
              id="homeCondition"
              value={formData.homeCondition}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hasTenant">Has Tenant:</label>
            <input
              type="text"
              className="form-control"
              name="hasTenant"
              id="hasTenant"
              value={formData.hasTenant}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <h5>Property Price</h5>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              className="form-control"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mortgageBalance">Mortgage Balance:</label>
            <input
              type="text"
              className="form-control"
              name="mortgageBalance"
              id="mortgageBalance"
              value={formData.mortgageBalance}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="propertyImage">Property Image:</label>
            <input
              type="file"
              className="form-control"
              name="propertyImage"
              id="propertyImage"
              //work Hers for image and uncomment following
              //
              // value={formData.propertyImage}
              // onChange={handleChange}
              // required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={back} className="btn btn-primary">
            Back
          </button>
        </Form>
      </div>
    </>
  );
};

export default SellNewItem;
