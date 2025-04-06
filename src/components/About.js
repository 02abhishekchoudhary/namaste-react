import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parents Constructor Called");
  }
  componentDidMount() {
    // console.log("Parents CMD");
  }
  render() {
    // console.log("Parents Render Called");
    return (
      <div>
        <h1 className="font-bold text-center text-3xl mt-8">About Us</h1>
        <div>
          LoggedIn User :
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1 className="text-lg">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2 className="font-semibold text-center text-2xl mt-4">
          Welcome to about us page of food delivery app
        </h2>
        <UserClass name={"Itachi"} location={"Konoha"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>Welcome to about us page of food delivery app</h2>
//       {/* <User name={"Naruto"} location={"Uzumaki Clan"} /> */}
//       <UserClass name={"Itachi"} location={"Uchia Clan"} />
//     </div>
//   );
// };

export default About;
