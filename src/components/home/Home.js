// import resList from "../../utils/mockData";
import { useEffect, useState } from "react";
import "./home.css";
import RestaurantCard from "../restaurant_card/RestaurantCard";
import Shimmer from "../shimmerUI/Shimmer";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.3965071&lng=80.1250479&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }
  // OR

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
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
