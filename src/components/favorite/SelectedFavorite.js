import { useNavigate } from "react-router";
import { FavoriteProperty } from "./FavoriteProperty";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Property from "../Property";

const SelectedFavorite = (props) => {

    const { favoriteItems, setfavoriteItems } = useContext(FavoriteProperty);

    const [postCall, setPostCall] = useState([]);

    const navigate = useNavigate();

    console.log("fsd" + props.propertyId);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/properties/" + props.propertyId)
            .then(response => {
                setPostCall(response.data);
                console.log(response.data);
            })
    }, [props.propertyId]);

    console.log(postCall);


    const unfollowPostHandler = () => {
        let removedPost = favoriteItems;
        removedPost.splice(removedPost.indexOf(props.id), 1);
        setfavoriteItems(removedPost);
        navigate("/customer")

    };

    let post = <p style={{ justifyContent: 'space-around' }}> Please select a Student!</p>;
    if (props != null) {
        post = (
            <div className="Followed">
                {/* <h1>{props.address}</h1> propertyLocationState = {postCall.address.street +","+ postCall.address.city} propertyLocationZip = {postCall.address.zip} propertyType={postCall.propertyDetail.propertyType} */}
                {postCall.address && postCall.address.city && postCall.address.street && postCall.address.zip && postCall.propertyDetail &&postCall.propertyDetail.propertyType &&
                    <Property props={postCall} propertyStatus={postCall.statusEnum} propertyLocationState={postCall.address.street + "," + postCall.address.city + "," + postCall.address.zip } propertyType={postCall.propertyDetail.propertyType} />
                }  {/* <p>{postCall.name}</p> */}
                <div className="Edit">
                    <button onClick={unfollowPostHandler} className="Delete">Unselect</button>
                </div>
            </div>
        );
    }


    return post;
}

export default SelectedFavorite;