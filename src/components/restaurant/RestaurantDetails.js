import "./restaurant.css";
import { useState } from "react";
import Shimmer from "../shimmerUI/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../../utils/useRestaurantDetails";
import RatingIcon from "../../assets/svgs/rating_icon.svg";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const resDetails = useRestaurantDetails(resId);
  const [showIndex, setShowIndex] = useState(0);

  const handleSetShowIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (resDetails == null) return <Shimmer />;

  const { name, avgRating, totalRatingsString, cuisines, costForTwoMessage } =
    resDetails?.cards[2]?.card?.card?.info;

  const categories =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div id="restaurant-details" className="w-6/12 mx-auto my-16">
      <h1 className="text-2xl font-black mb-6 text-black">{name}</h1>
      <div className="border py-6 px-4 shadow-md shadow-slate-300 rounded-lg">
        <div className="flex gap-1 mb-2">
          <img className="w-4" src={RatingIcon} alt="rating" loading="lazy" />
          <p className="text-base font-bold text-black">
            {avgRating}({totalRatingsString}) • {costForTwoMessage}
          </p>
        </div>
        <p className="text-green-600 underline">{cuisines.join(", ")}</p>
      </div>
      <div className="my-6">
        <p className="text-center text-md text-gray-500 font-semibold  uppercase">
          -- Menu --
        </p>
      </div>
      <div>
        {categories.map((category, index) => (
          <RestaurantMenuCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => handleSetShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
