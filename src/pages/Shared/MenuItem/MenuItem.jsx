const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex items-center space-x-3">
      <img
        src={image}
        alt={name}
        className="w-[118px] h-[104px]"
        style={{ borderRadius: "0px 200px 200px 200px" }}
      />
      <div>
        <h3 className="uppercase ">{name}--------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-400">${price}</p>
    </div>
  );
};

export default MenuItem;
