import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Welcome to about us page of food delivery app</h2>
      {/* <User name={"Naruto"} location={"Uzumaki Clan"} /> */}
      <UserClass name={"Itachi"} location={"Uchia Clan"} />
    </div>
  );
};

export default About;
