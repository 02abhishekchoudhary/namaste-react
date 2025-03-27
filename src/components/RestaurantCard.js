import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="Ramen in a bowl"
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="rmv-link">{name}</h3>
      <h4 className="rmv-link">{cuisines?.join(", ")}</h4>
      <h4 className="rmv-link">Rating: {avgRating} stars</h4>
      <h4 className="rmv-link">Price: {costForTwo}</h4>
      <h4 className="rmv-link">Delivery In: {sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
