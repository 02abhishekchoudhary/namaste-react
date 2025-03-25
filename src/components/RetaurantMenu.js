import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  // const [resMenuInfo, setResMenuInfo] = useState([]);
  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const response = await fetch(RESTAURANT_MENU_API);
      const json = await response.json();
      setResInfo(
        js?.data?.cards?.find((item) =>
          item?.card?.card["@type"]?.includes("food.v2.Restaurant")
        )?.card?.card?.info
      );

      // const menuData = json?.data?.cards
      //   ?.find((obj) => obj?.groupedCard)
      //   ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      //     (obj) =>
      //       obj?.card?.card["@type"]?.includes("ItemCategory") ||
      //       obj?.card?.card["@type"]?.includes("NestedItemCategory")
      //   );

      // const organisedMenuData = menuData?.map((item) => {
      //   const type = item?.card?.card["@type"];
      //   const title = item?.card?.card?.title;
      //   const itemCards = item?.card?.card?.itemCards || [];
      //   const categories = item?.card?.card?.categories || [];
      //   if (type?.includes("NestedItemCategory")) {
      //     return {
      //       title,
      //       type: "nested",
      //       categories: categories?.map((subcategory) => {
      //         return {
      //           title: subcategory?.title,
      //           itemCards: subcategory?.itemCards,
      //         };
      //       }),
      //     };
      //   } else {
      //     return {
      //       title,
      //       type: "item",
      //       itemCards,
      //     };
      //   }
      // });
      // setResMenu(menuData);
      // setResMenuInfo(organisedMenuData);
      // console.log(menuData);
    } catch (err) {
      console.log("Error in fetching menu API", err);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <h1>Loading..</h1>;

  const { name, locality, avgRating } = resInfo;

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>Locality: {locality}</p>
      <p>Rating: {avgRating}</p>
    </div>
    // {/* {resMenu?.map((category) =>
    //   category?.type === "item" ? (
    //     <ItemCategory key={category?.title} data={category} />
    //   ) : (
    //     <NestedItemCategory key={category?.title} data={category} />
    //   )
    // )} */}
  );
};

// const ItemCategory = (props) => {
//   console.log(props);
//   const { title, itemCards } = props?.data;
//   return (
//     <div>
//       <h2>{title}</h2>
//       <ul>
//         {itemCards?.map((item) => (
//           <MenuItem menuInfo={item?.card?.info} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const NestedItemCategory = (props) => {
//   return <div></div>;
// };

// const MenuItem = (props) => {
//   const { name, price, defaultPrice, description } = props?.menuInfo;
//   return (
//     <li>
//       <h4>{name}</h4>
//     </li>
//   );
// };

export default RestaurantMenu;
