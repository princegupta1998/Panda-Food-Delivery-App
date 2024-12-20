import { CDN_URL } from "../../utils/constants";

const RestaurantMenuList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between gap-10 border-b-2 pt-6 pb-8 border-col border-gray-200"
        >
          <div className="w-9/12">
            <h3 className="text-lg font-bold">{item?.card?.info?.name}</h3>
            <p className="mb-3 text-gray-900 font-semibold">
              ₹{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
            <p className="font-medium text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt="Menu-image"
              loading="/lazy"
              className="rounded-xl h-36 object-cover"
            ></img>
            <button className="font-black text-lg text-green-600 py-1.5 px-10 bg-white shadow-md rounded-lg absolute -bottom-5 left-7">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuList;
