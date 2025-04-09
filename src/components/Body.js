import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  // console.log(listOfRestaurants);

  // useEffect with empty dependacy array -> useEffect is called on initial render just once.
  // useEffect without dependacy array -> useEffect is called on every render of the component.
  // useEffect with value in dependacy array -> useEffect is called on value changed of dependancy array.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantData = json?.data?.cards?.find((item) =>
      item?.card?.card?.id?.includes("restaurant_grid")
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  };

  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);
  if (onlineStatus === false) {
    return (
      <h1>You are offline!! Please check your internet connection once!!</h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-black rounded-md p-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className=" flex items-center">
          <button
            className="px-4 py-2 m-4 bg-orange-200 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              // console.log(filteredList);
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-2 m-4 bg-blue-200 rounded-lg"
            onClick={() => {
              const sortedList = [...listOfRestaurants].sort(
                (a, b) => a?.info?.avgRating - b?.info?.avgRating
              );
              // console.log(sortedList);
              setFilteredRestaurants(sortedList);
            }}
          >
            Sort By Rating
          </button>
          <div>
            <label>UserName : </label>
            <input
              className="border border-black rounded-md p-2 mx-4"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant, index) => (
          <Link
            className="rmv-links"
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            {restaurant?.info?.id ? (
              <PromotedRestaurantCard resData={restaurant?.info} />
            ) : (
              <RestaurantCard resData={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
