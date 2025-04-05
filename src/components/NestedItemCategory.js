import MenuItem from "./MenuItem";

const NestedItemCategory = ({ data, isActive, onToggle }) => {
  const { title, categories } = data;

  return (
    <div className="w-9/12 mx-auto my-4 bg-gray-50 shadow-lg">
      <div
        className="p-4 flex justify-between cursor-pointer"
        onClick={onToggle}
      >
        <span className="font-bold text-lg">{title}</span>
        <span>{isActive ? "🔼" : "🔽"}</span>
      </div>
      {isActive &&
        categories?.map((subcategory) => (
          <div key={subcategory?.title}>
            <span className="font-semibold text-lg p-2 ml-4">
              {subcategory?.title} ({subcategory?.itemCards?.length})
            </span>
            <ul>
              {subcategory?.itemCards?.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  menuInfo={item?.card?.info}
                />
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
export default NestedItemCategory;
