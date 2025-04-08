import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNamereact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between border rounded-lg border-black m-1 bg-orange-300">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="Logo of food delivery app"
          className="w-56 rounded-t-lg rounded-b-lg"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-xl font-bold text-white">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 font-bold text-xl  text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold text-xl text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-bold text-xl text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl text-white">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl text-white">
            Cart - ({cartItems.length} items)
          </li>
          <button
            className="border border-black px-4 bg-red-400"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNamereact("Logout")
                : setBtnNamereact("Login")
            }
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold text-xl text-white">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
