import React from "react";

function OwnerContainer() {
  const acceptOffer = () => {};

  const rejectOffer = () => {};

  const noOfOffer = () => {};

  return (
    <div>
      Your adds
      <ul>
        <li>
          <p>Description:</p>
          {/* <button onclick="acceptOffer(1)">Accept</button>&nbsp;
          <button onclick="rejectOffer(1)">Reject</button>&nbsp; */}
          <button onclick="noOfOffer">Offers</button>
        </li>
      </ul>
    </div>
  );
}

export default OwnerContainer;
