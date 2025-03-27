import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <h2>Count: {count2}</h2>
        <h3>{name}</h3>
        <h4>{location}</h4>
        <h5>Contact: @itachiuchia</h5>
      </div>
    );
  }
}

export default UserClass;
