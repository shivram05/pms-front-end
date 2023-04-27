import React from "react";
import "./ListOfOffer.css";
import Badge from "react-bootstrap/Badge";

const ListOfOffers = () => {
  const acceptOffer = () => {};
  const declineOffer = () => {};

  const offers = () => {
    const status = "Available";
    return (
      <table class="table">
        <thead>
          <tr>
            <th class="th">Offer Name</th>
            <th class="th">Description</th>
            <th class="th">Offered Price</th>
            <th class="th">Action</th>
            <th class="th">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Offer 1</td>
            <td>Description of Offer 1</td>
            <td>$19.99</td>
            <td>
              <Badge pill bd="success" onClick={acceptOffer}>
                Accept
              </Badge>{" "}
              <Badge pill bd="danger" onClick={declineOffer} class="secondary">
                Decline
              </Badge>
            </td>
            <td>
              <Badge pill bd="primary">
                {status}
              </Badge>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div>
      List Of Offers
      {offers()}
    </div>
  );
};

export default ListOfOffers;
