import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent CDM called");
  }
  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>About Us</h1>
        <h2>Welcome to about us page of food delivery app</h2>
        <UserClass name={"First"} location={"Uchia Clan"} />
        <UserClass name={"Second"} location={"Uzumaki Clan"} />
        <UserClass name={"Third"} location={"Uzumaki Clan"} />
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
