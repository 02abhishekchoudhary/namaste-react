import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h3>{name}</h3>
        <h4>{location}</h4>
        <h5>Contact: @itachiuchia</h5>
      </div>
    );
  }
}

export default UserClass;
