import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor called");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const fetchData = await fetch(
      "https://api.github.com/users/02abhishekchoudhary"
    );
    const data = await fetchData.json();

    this.setState({
      userInfo: data,
    });

    console.log(data);
    console.log("Child CMD Called");
  }

  componentDidUpdate() {
    console.log("Component Did Update Called");
  }

  componentWillUnmount() {
    console.log("Component will Unmount Called");
  }

  render() {
    console.log("Child Render Called");
    const { login, id, avatar_url, name, location, bio, followers, following } =
      this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar" height={100} width={100} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Username: {login}</h3>
        <h3>Id: {id}</h3>
        <h3>Bio: {bio}</h3>
        <h3>Followers: {followers}</h3>
        <h3>Following: {following}</h3>
      </div>
    );
  }
}

export default UserClass;
