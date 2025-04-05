import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";
import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const { resId } = useParams();
  // console.log(resId);

  const fetchMenu = async () => {
    try {
      const response = await fetch(RESTAURANT_MENU_API + resId);
      const json = await response.json();
      const menuData = json?.data?.cards
        ?.find((obj) => obj?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (obj) =>
            obj?.card?.card["@type"]?.includes("ItemCategory") ||
            obj?.card?.card["@type"]?.includes("NestedItemCategory")
        );
      // console.log(menuData);

      const organisedMenuData = menuData?.map((item) => {
        const type = item?.card?.card["@type"];
        const title = item?.card?.card?.title;
        const itemCards = item?.card?.card?.itemCards || [];
        const categories = item?.card?.card?.categories || [];
        // console.log(categories);

        if (type?.includes("NestedItemCategory")) {
          return {
            title,
            type: "nested",
            categories: categories?.map((subcategory) => {
              return {
                title: subcategory?.title,
                itemCards: subcategory?.itemCards,
              };
            }),
          };
        } else {
          return {
            title,
            type: "item",
            itemCards,
          };
        }
      });

      setResInfo(
        json?.data?.cards?.find((item) =>
          item?.card?.card["@type"]?.includes("food.v2.Restaurant")
        )?.card?.card?.info
      );

      setResMenu(organisedMenuData);
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
    <div className="">
      <div className="flex justify-around  m-1 items-center h-24 rounded-lg text-2xl font-extrabold mt-4 w-9/12 mx-auto shadow-lg">
        <h1 className="uppercase text-3xl text-orange-500">{name}</h1>
        <h3 className="text-blue-400">Locality: {locality}</h3>
        <h4 className="text-green-400">Rating: {avgRating}⭐</h4>
      </div>
      {resMenu?.map((category, index) =>
        category?.type === "item" ? (
          <ItemCategory
            key={category?.title}
            data={category}
            isActive={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ) : (
          <NestedItemCategory
            key={category?.title}
            data={category}
            isActive={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        )
      )}
    </div>
  );
};

export default RestaurantMenu;
