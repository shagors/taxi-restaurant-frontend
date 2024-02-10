import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-24">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid grid-cols-12 md:grid-cols-2 gap-8">
        {menu?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <button className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
