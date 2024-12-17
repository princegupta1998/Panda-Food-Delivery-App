import { useState } from "react";
import downArrow from "../../assets/svgs/downArrow.svg";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenuCategory = ({ data }) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="mb-2">
      <div
        className="flex justify-between cursor-pointer bg-gray-100 p-4 rounded-lg shadow-sm"
        onClick={handleClick}
      >
        <p className="text-lg font-bold text-black">
          {data?.title} ({data?.title.length})
        </p>
        <img src={downArrow} alt="arrow" loading="/lazy" className="w-4"></img>
      </div>
      <div className="p-4">
        {show && <RestaurantMenuList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
