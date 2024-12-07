import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantDetails = (resId) => {
  const [resDetails, SetResDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    SetResDetails(json?.data);
  };

  return resDetails;
};

export default useRestaurantDetails;
