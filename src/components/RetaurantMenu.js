import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
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
    <div className="menu-container">
      <h1>{name}</h1>
      <h3>Locality: {locality}</h3>
      <h4>Rating: {avgRating}</h4>
      {resMenu?.map((category) =>
        category?.type === "item" ? (
          <ItemCategory key={category?.title} data={category} />
        ) : (
          <NestedItemCategory key={category?.title} data={category} />
        )
      )}
    </div>
  );
};

const ItemCategory = (props) => {
  // console.log(props);
  const { title, itemCards } = props?.data;
  return (
    <div>
      <h2 className="heading-title">
        {title} ({itemCards?.length})
      </h2>
      <ul>
        {itemCards?.map((item) => (
          <MenuItem key={item?.card?.info?.id} menuInfo={item?.card?.info} />
        ))}
      </ul>
    </div>
  );
};

const NestedItemCategory = (props) => {
  // console.log(props);
  const { title, categories } = props?.data;
  return (
    <div>
      <h2 className="heading-title">{title}</h2>
      <div>
        {categories?.map((subcategory) => (
          <div key={subcategory?.title}>
            <h3>
              {subcategory?.title} ({subcategory?.itemCards?.length})
            </h3>
            <ul>
              {subcategory?.itemCards?.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  menuInfo={item?.card?.info}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const MenuItem = (props) => {
  // console.log(props?.menuInfo);
  const { name, price, defaultPrice, description, imageId } = props?.menuInfo;
  const RESTAURANT_MENU_IMG =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  return (
    <li className="menuitem">
      <div>
        <h4>{name}</h4>
        {price && <span>Rs {(price / 100).toFixed(2)}</span>}
        {defaultPrice && <span>Rs {(defaultPrice / 100).toFixed(2)}</span>}
        {description && <p>{description}</p>}
      </div>
      <div>{imageId && <img src={RESTAURANT_MENU_IMG + imageId} />}</div>
    </li>
  );
};

export default RestaurantMenu;
