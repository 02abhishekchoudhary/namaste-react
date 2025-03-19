import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNamereact] = useState("Login");
  console.log("Body Render");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo of food delivery app" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
