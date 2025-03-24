import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const fetchMenu = async () => {
    const URL =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139298&lng=77.2088282&restaurantId=16865&catalog_qa=undefined&submitAction=ENTER";
    const fetchUrl = await fetch(URL);
    const data = await fetchUrl.json();
    console.log(data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div className="menu-container">
      <h1>Restaurant Name</h1>
      <h2>Menu</h2>
      <h3>Price</h3>
    </div>
  );
};

export default RestaurantMenu;
