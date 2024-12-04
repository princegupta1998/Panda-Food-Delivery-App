import { CDN_URL } from "../../utils/constants";
import "./restaurant.css";
import RatingIcon from "../../assets/svgs/rating_icon.svg";

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

export default RestaurantCard;
