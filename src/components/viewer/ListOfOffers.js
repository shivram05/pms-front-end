import React, { useEffect, useState } from "react";
import "./ListOfOffer.css";
import Badge from "react-bootstrap/Badge";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
const ListOfOffers = () => {
  const [offerListData, setOfferListData] = useState([]);

  const [offerId, setOfferOfferId] = useState(0);
  const [flag, setFlag] = useState(false);
  const acceptOffer = (offerId) => {
    // console.log("accept offer" + offerId);

    axios
      .post("http://localhost:8080/api/v1/offers/accept/" + offerId)
      .then((response) => {
        // setOfferListData(response.data);
        console.log(response.data);
        setFlag(!flag);
        setOfferOfferId();
        toast.success("Offer Accepted and Status Changed to Contingent");
      })
      .catch((err) => console.log(err.message));
  };
  const declineOffer = (declineOFferId) => {
    axios
      .delete("http://localhost:8080/api/v1/offers/" + declineOFferId)

      .then((response) => {
        setFlag(!flag);
        toast.success("Offer Removed");
      })

      .catch((err) => console.log(err.message));
    //  offerListData.filter((offer) => offer.offerId !== declineOFferId)
  };

  const listOfferData = () => {
    return offerListData.map((offer) => (
      <tr key={offer.offerId}>
        <td>{offer.offerId}</td>
        <td>{offer.offeredPrice}</td>

        <td>
          <>
            <Button
              variant="success"
              onClick={() => {
                acceptOffer(offer.offerId);
              }}
            >
              Accept
            </Button>{" "}
            <Button
              variant="danger"
              onClick={() => {
                declineOffer(offer.offerId);
              }}
            >
              Delete
            </Button>
            <toast />
          </>
        </td>
        <td>
          <Button variant="primary">{offer.property.statusEnum}</Button>
        </td>
      </tr>
    ));
  };

  useEffect(() => {
    // userId
    axios
      .get("http://localhost:8080/api/v1/offers/6")
      .then((response) => {
        setOfferListData(response.data);

        console.log(response.data);
      })
      .catch((err) => console.log(err.message));
  }, [flag]);

  // console.log(offerListData)
  const offers = () => {
    const status = "Available";
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="th">Offer Id</th>
            <th className="th">Offered Price $</th>
            <th className="th">Action</th>
            <th className="th">Status</th>
          </tr>
        </thead>
        <tbody>{listOfferData()}</tbody>
      </table>
    );
  };

  return (
    <div>
      <>
        List Of Offers
        {offers()}
      </>
    </div>
  );
};

export default ListOfOffers;
