import React from "react";
import { Button } from "react-bootstrap";

const ListOfOffers = () => {
  const acceptOffer = () => {};
  const declineOffer = () => {};

  const offers = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Offer Name</th>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <th>Description</th>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <th>Offered Price</th>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Offer 1</td>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <td>Description of Offer 1</td>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <td>$19.99</td>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <td>
              <Button onClick={acceptOffer()}>Accept</Button>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              <Button onClick={declineOffer()} className="secondary">
                Decline
              </Button>
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
