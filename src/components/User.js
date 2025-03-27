const User = (props) => {
  const { name, location } = props;
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <h4>{location}</h4>
      <h5>Contact: @narutouzumaki</h5>
    </div>
  );
};

export default User;
