import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          alt="Logo of food delivery app"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resName, cuisine, rating, url, time } = props;
  return (
    <div className="res-card">
      <img src={url} alt="Ramen in a bowl" className="res-logo" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h5>{rating}</h5>
      <h6>{time}</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/767b25b484fdb48962b6a1bfb31525fe"
          resName="Ichiraku Ramen"
          cuisine="Ramen, Korean, Chinese"
          rating="4.9 Stars"
          time="38 mins"
        />
        <RestaurantCard
          url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/20/d8b3d7ab-10f4-4b37-9874-73b5e99c26c6_1b12a325-8980-45e4-8121-0e458703dbde.jpg"
          resName="Itachi Pizza"
          cuisine="Italian, Indian, Chinese"
          rating="4.8 Stars"
          time="25 mins"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
