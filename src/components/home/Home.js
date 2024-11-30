import resList from "../../utils/mockData";
import "./home.css";
import RestaurantCard from "../restaurant_card/RestaurantCard";
import { useState } from "react";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  const [isActive, setIsActive] = useState(false);

  return (
    <main id="home" className="container">
      <h1 className="home-heading">Top restaurant chains in Noida</h1>
      <div className="res-wrapper">
        <div className="res-filters">
          <button
            className={`res-filter-item button ${isActive ? "active" : ""}`}
            onClick={() => {
              filterdList = restaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setRestaurantList(filterdList);
              setIsActive(!isActive);
              // console.log(filterdList);
            }}
          >
            Rating 4.0+
          </button>
        </div>
        <div className="res-cards">
          {restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
