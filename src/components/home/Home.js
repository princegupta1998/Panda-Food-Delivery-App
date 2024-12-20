import { useContext, useState } from "react";
import "./home.css";
import RestaurantCard, { withOffersLabel } from "../restaurant/RestaurantCard";
import Shimmer from "../shimmerUI/Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";
import UserContext from "../../utils/UserContext";

const Home = () => {
  const { restaurantList, filterdRestaurant, setFilterdRestaurant } =
    useRestaurantList();
  const [isActive, setIsActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  const RestaurantWithOffers = withOffersLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

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
          <div>
            <label>Username:</label>
            <input
              className="p-3 ml-2 rounded-full border"
              type="text"
              placeholder="Enter your username"
              value={loggedInUser}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="res-cards">
          {filterdRestaurant.map((restaurant) => (
            <Link
              to={"restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 &&
              Object.keys(restaurant?.info?.aggregatedDiscountInfoV3).length >
                0 ? (
                <RestaurantWithOffers resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
