import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNamereact] = useState("Login");
  // console.log("Body Render");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo of food delivery app" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            className="login"
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
