const MenuItem = (props) => {
  const { name, price, defaultPrice, description, imageId } = props?.menuInfo;
  const RESTAURANT_MENU_IMG =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  return (
    <div>
      <li className="flex justify-between border border-black mt-4 mx-auto rounded-md p-2 w-11/12 items-center">
        <div className="w-8/12">
          <h4 className="font-semibold text-xl uppercase mb-3 ">{name}</h4>
          {price && (
            <span className=" text-xl mb-3">₹ {(price / 100).toFixed(2)}</span>
          )}
          {defaultPrice && (
            <span className=" text-xl">
              ₹ {(defaultPrice / 100).toFixed(2)}
            </span>
          )}
          {description && <p className=" text-lg">{description}</p>}
        </div>
        <div className="">
          {imageId && (
            <img className="rounded-lg" src={RESTAURANT_MENU_IMG + imageId} />
          )}
        </div>
      </li>
    </div>
  );
};
export default MenuItem;
