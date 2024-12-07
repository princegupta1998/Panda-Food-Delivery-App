import "./restaurant.css";
import Shimmer from "../shimmerUI/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const resDetails = useRestaurantDetails(resId);

  if (resDetails == null) return <Shimmer />;

  const { name, avgRating, totalRatingsString, cuisines, costForTwoMessage } =
    resDetails?.cards[2]?.card?.card?.info;

  const { cards } = resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div id="restaurant-details" className="container">
      <h1>{name}</h1>
      <p>
        {avgRating}({totalRatingsString}) • {costForTwoMessage}
      </p>
      <p>{cuisines.join(", ")}</p>

      {cards.map((menuWithTitle, index) => {
        const title = menuWithTitle?.card?.card?.title;
        const menu = menuWithTitle?.card?.card?.itemCards;

        return (
          <div key={index}>
            <h3>{title}</h3>
            <ul>
              {menu?.map((item) => (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name}- {"₹"}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantDetails;
