import { RESTAURANT_MENU_IMG, CDN_URL } from "../utils/constants";

const MenuItem = (props) => {
  const { name, price, defaultPrice, description, imageId } = props?.menuInfo;
  return (
    <div>
      <li className="flex justify-between border border-black mt-4 mx-auto rounded-md p-2 w-11/12 items-center shadow-lg">
        <div className="w-8/12">
          <h4 className="font-semibold text-xl uppercase mb-3 ">{name}</h4>

          <span className=" text-xl mb-3">
            ₹ {price ? price / 100 : defaultPrice / 100}
          </span>

          {/* {defaultPrice && (
            <span className=" text-xl">
              ₹ {(defaultPrice / 100).toFixed(2)}
            </span>
          )} */}
          {description && <p className=" text-lg">{description}</p>}
        </div>
        <div className="relative">
          <button className="text-white bg-black absolute rounded-lg bottom-0 right-">
            Add+
          </button>
          {imageId && (
            <img className="rounded-lg" src={RESTAURANT_MENU_IMG + imageId} />
          )}
        </div>
      </li>
    </div>
  );
};
export default MenuItem;
