import { useContext } from "react";
import { FavoriteProperty } from "./FavoriteProperty";
import SelectedFavorite from "./SelectedFavorite";

const FavoriteSection = () => {
    const { favoriteItems } = useContext(FavoriteProperty);
    console.log(favoriteItems)
    if (!favoriteItems || favoriteItems.length === 0) {
        return <p>Please select a Property!</p>;
    }

    const followingList = favoriteItems.map(postId => {
        console.log("fds" + postId);
        return <SelectedFavorite propertyId={postId} key={postId}/>;
    }
    );
  return (
    <div>
      <h3>Favorite Items:</h3>
      {followingList}
    </div>
     );
}
 
export default FavoriteSection;