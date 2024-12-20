import downArrow from "../../assets/svgs/downArrow.svg";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenuCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(true);

  return (
    <div className="mb-2">
      <div
        className="flex justify-between cursor-pointer bg-gray-100 p-4 rounded-lg shadow-sm"
        onClick={setShowIndex}
      >
        <p className="text-lg font-bold text-black">
          {data?.title} ({data?.title.length})
        </p>
        <img
          src={downArrow}
          alt="arrow"
          loading="/lazy"
          className={`w-4 transform transition-transform ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        ></img>
      </div>
      <div className="p-4">
        {showItems && <RestaurantMenuList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
