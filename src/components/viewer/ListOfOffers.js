import React, { useEffect, useState } from "react";
import "./ListOfOffer.css";
import Badge from "react-bootstrap/Badge";
import axios from "axios";

const ListOfOffers = () => {
  const [offerListData, setOfferListData] = useState([]);

  const [offerId, setOfferOfferId] = useState(0);

  const acceptOffer = (offerId) => {
    console.log("accept offer" + offerId);
    
     axios
        .post("http://localhost:8080/api/v1/offers/accept/"+offerId)
        .then((response) => {
          setOfferListData(response.data);
          console.log(response.data);
        })
        .catch((err) => console.log(err.message));
   
  };
  const declineOffer = () => {};

  const listOfferData = ()=>{
    offerListData.map((offer) => (
      <tr key={offer.offerId}>
        <td>{offer.offerId}</td>
        <td>{offer.offeredPrice}</td>

        <td>
          <Badge
            pill
            bd="success"
            onClick={() => {
              acceptOffer(offer.offerId);
            }}
          >
            Accept
          </Badge>{" "}
          <Badge
            pill
            bd="danger"
            onClick={declineOffer}
            class="secondary"
          >
            Decline
          </Badge>
        </td>
        <td>
          <Badge pill bd="primary">
            {offer.property.statusEnum}
          </Badge>
        </td>
      </tr>
    ))
  }

  useEffect(() => {
    // userId
    axios
      .get("http://localhost:8080/api/v1/offers/6")
      .then((response) => {
        setOfferListData(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err.message));
  }, [6]);

  // console.log(offerListData)
  const offers = () => {
    const status = "Available";
    return (
      <table class="table">
        <thead>
          <tr>
            <th class="th">Offer Id</th>
            <th class="th">Offered Price $</th>
            <th class="th">Action</th>
            <th class="th">Status</th>
          </tr>
        </thead>
        <tbody>
          {listOfferData}
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
