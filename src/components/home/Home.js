import { useEffect, useState } from "react";
import "./home.css";
import RestaurantCard from "../restaurant/RestaurantCard";
import Shimmer from "../shimmerUI/Shimmer";
import { RES_API } from "../../utils/constants";
import { Link } from "react-router-dom";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterdRestaurant, setFilterdRestaurant] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);

    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <main id="home" className="container">
      <h1 className="home-heading">Top restaurant chains in Noida</h1>
      <div className="res-wrapper">
        <div className="res-filters">
          <div className="search-wrapper">
            <input
              className="search-box"
              type="search"
              placeholder="Search for restaurants"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="search-btn button"
              onClick={() => {
                // console.log(searchText);
                const searchList = restaurantList.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilterdRestaurant(searchList);
              }}
            >
              Search
            </button>
          </div>
          <button
            className={`res-filter-item button ${isActive ? "active" : ""}`}
            onClick={() => {
              const filterdList = filterdRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterdRestaurant(filterdList);
              setIsActive(!isActive);
              // console.log(filterdList);
            }}
          >
            Rating 4.0+
          </button>
        </div>
        <div className="res-cards">
          {filterdRestaurant.map((restaurant) => (
            <Link
              to={"restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
