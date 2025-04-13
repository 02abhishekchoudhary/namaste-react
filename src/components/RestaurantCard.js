import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 w-[300px] h-[550px]"
    >
      <img
        alt="Ramen in a bowl"
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="rmv-link">{cuisines?.join(", ")}</h4>
      <h4 className="rmv-link">Rating: {avgRating} stars</h4>
      <h4 className="rmv-link">Price: {costForTwo}</h4>
      <h4 className="rmv-link">Delivery In: {sla?.slaString}</h4>
      <h4 className="rmv-link">User: {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-green-400 text-white px-2 py-1 text-xs rounded top-2 left-2 z-10">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
