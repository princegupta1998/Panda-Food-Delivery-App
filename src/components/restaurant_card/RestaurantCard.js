import React from "react";
import "./restaurantcard.css";
import RatingIcon from "../../assets/svgs/rating_icon.svg";

const RestaurantCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ntcsuou2650qimnkrc3m"
          alt="restaurant"
          loading="lazy"
        />
      </div>
      <div className="card-information">
        <h3 className="card-title">Accord International</h3>
        <div className="card-rating-time">
          <span className="card-rating">
            <img src={RatingIcon} alt="rating" loading="lazy" />
            4.4
          </span>
          <span className="card-time">35-40 mins</span>
        </div>
        <p className="card-cuisine">
          North Indian, South Indian, Continental, Beverages
        </p>
        <p className="card-area">Vishnu Nagar</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
