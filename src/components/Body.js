import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantData = json?.data?.cards?.find((item) =>
      item?.card?.card?.id?.includes("restaurant_grid")
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(restaurantData);
    setListOfRestaurants(restaurantData);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res?.resData?.avgRating > 4
            );
            // console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        {/* <button
          className="filter-btn"
          onClick={() => {
            const sortedList = resList.sort(
              (a, b) => a.data.avgRating - b.data.avgRating
            );
            console.log(sortedList);
            setListOfRestaurants(sortedList);
          }}
        >
          Sort By Rating
        </button> */}
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resData={restaurant?.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
