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
      <div className="flex items-center justify-center">
        <div className="m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200 w-[300px] h-[550px]">
          <img
            className="w-[300px] h-[250px] rounded-lg mb-8"
            src={avatar_url}
            alt="Avatar"
          />
          <h2 className="font-bold">
            Name:<span className="uppercase"> {name}</span>
          </h2>
          <h3 className="font-bold">Location: {location}</h3>
          <h3 className="font-bold">Username: {login}</h3>
          <h3 className="font-bold">Id: {id}</h3>
          <h3 className="font-bold">Bio: {bio}</h3>
          <h3 className="font-bold">Followers: {followers}</h3>
          <h3 className="font-bold">Following: {following}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
