import MenuItem from "./MenuItem";

const ItemCategory = ({ data, isActive, onToggle }) => {
  const { title, itemCards } = data;

  return (
    <div className="w-9/12 mx-auto my-4 bg-gray-50 shadow-lg">
      <div
        className="p-4 flex justify-between cursor-pointer"
        onClick={onToggle}
      >
        <span className="font-bold text-lg">
          {title} ({itemCards?.length})
        </span>
        <span>{isActive ? "🔼" : "🔽"}</span>
      </div>
      {isActive && (
        <ul>
          {itemCards?.map((item) => (
            <MenuItem key={item?.card?.info?.id} menuInfo={item?.card?.info} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemCategory;
