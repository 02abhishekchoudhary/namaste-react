import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name + "Child constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + "Child CDM called");
  }

  render() {
    console.log(this.props.name + "Child render called");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            // NEVER DIRECTLY UPDATE STATE VARIABLES
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h3>{name}</h3>
        <h4>{location}</h4>
        <h5>Contact: @itachiuchia</h5>
      </div>
    );
  }
}

export default UserClass;
