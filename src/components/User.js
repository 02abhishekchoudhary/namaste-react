import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count: {count2}</h2>
      <h3>{name}</h3>
      <h4>{location}</h4>
      <h5>Contact: @narutouzumaki</h5>
    </div>
  );
};

export default User;
