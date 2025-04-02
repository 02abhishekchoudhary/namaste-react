import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNamereact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  // console.log("Body Render");
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo of food delivery app" className="w-56" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link>Cart</Link>
          </li>
          <button
            className="border border-black px-4 bg-green-200"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNamereact("Logout")
                : setBtnNamereact("Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
