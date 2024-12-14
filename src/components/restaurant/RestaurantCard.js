import { CDN_URL } from "../../utils/constants";
import "./restaurant.css";
import RatingIcon from "../../assets/svgs/rating_icon.svg";
import Shimmer from "../shimmerUI/Shimmer";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla: { slaString },
    cuisines,
    areaName,
  } = resData?.info;

  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant"
          loading="lazy"
        />
      </div>
      <div className="card-information">
        <h3 className="card-title">{name}</h3>
        <div className="card-rating-time">
          <span className="card-rating">
            <img src={RatingIcon} alt="rating" loading="lazy" />
            {avgRating}
          </span>
          <span className="card-time">{slaString}</span>
        </div>
        <p className="card-cuisine">{cuisines.join(", ")}</p>
        <p className="card-area">{areaName}</p>
      </div>
    </div>
  );
};

export const withOffersLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3, ...rest } = resData?.info;
    console.log(props);
    return (
      <div className="relative">
        <label className="absolute text-lg font-black text-white top-40 left-4 bg-black bg-opacity-60 px-2 rounded-md ">
          {`${aggregatedDiscountInfoV3?.header} ${aggregatedDiscountInfoV3?.subHeader}`}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
