import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
const SellNewItem = () => {
  const navigate = useNavigate();

  const placeNewItem = () => {
    navigate("/owner");
  };
  const back = () => {
    navigate("/owner");
  };

  return (
    <div>
      SellNewItem
      <form
        // th:action="@{/properties/save}"
        // th:object="${property}"
        method="post"
      >
        <div class="form-group">
          <h5>Address</h5>
          <label for="city">City:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{address}"
            id="city"
          />
        </div>
        <div class="form-group">
          <label for="state">State:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyDetail}"
            id="state"
          />
        </div>
        <div class="form-group">
          <label for="zip">Zip Code:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyDetail}"
            id="zip"
          />
        </div>
        <div class="form-group">
          <label for="country">Country:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyImages}"
            id="country"
          />
        </div>
        <div class="form-group">
          <h5>Property Details</h5>
          <label for="size">Size:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{address}"
            id="size"
          />
        </div>
        <div class="form-group">
          <label for="homeSize">Home Size:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyDetail}"
            id="homeSize"
          />
        </div>
        <div class="form-group">
          <label for="year">Year Build:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyDetail}"
            id="year"
          />
        </div>
        <div class="form-group">
          <label for="noOfRooms">No of Rooms:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyImages}"
            id="noOfRooms"
          />
        </div>
        <div class="form-group">
          <label for="noOfFullBathrooms">No of Full Bathrooms:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyDetail}"
            id="noOfFullBathrooms"
          />
        </div>
        <div class="form-group">
          <label for="noOfPartialBathrooms">No of Partial Bathrooms:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyImages}"
            id="noOfPartialBathrooms"
          />
        </div>
        <div class="form-group">
          <label for="homeCondition">Condition of Home:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyDetail}"
            id="homeCondition"
          />
        </div>
        <div class="form-group">
          <label for="hasTenent">Has Tenent:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyDetail}"
            id="hasTenent"
          />
        </div>
        <div class="form-group">
          <h5>Finincial Details</h5>
          <label for="propertyPrice">Price of Property:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{address}"
            id="propertyPrice"
          />
        </div>
        <div class="form-group">
          <label for="mortgageBalance">Mortgage Balance:</label>
          <input
            type="text"
            class="form-control"
            // th:field="*{propertyDetail}"
            id="mortgageBalance"
          />
        </div>
        <Form.Group controlId="formFileSm" className="mb-3">
          <h5>Property Images</h5>
          <Form.Control type="file" size="sm" />
          console.log(formFileSm)
        </Form.Group>
        <Button onClick={placeNewItem} class="btn btn-primary">
          Submit
        </Button>{" "}
        &nbsp;&nbsp;&nbsp;
        <Button onClick={back} class="btn btn-primary">
          Back
        </Button>{" "}
        <br />
        <text>Click Submit to Place Item on Sell</text>
      </form>
    </div>
  );
};

export default SellNewItem;
