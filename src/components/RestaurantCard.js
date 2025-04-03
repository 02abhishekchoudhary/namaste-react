import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData;

  return (
    <div className="m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 w-[300px] h-[550px]">
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
    </div>
  );
};

export default RestaurantCard;
