import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../src/utils/constants";

const Body = () => {
  const [res, setRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Mounted");

  useEffect(() => {
    console.log("useEffect is triggered");
    getRestuarants();
  }, []);

  const getRestuarants = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();

      // Log the response structure (optional, helpful for debugging)
      // console.log("Full API Response:", JSON.stringify(json, null, 2));

      // Dynamically find the card that contains restaurant data
      const restaurantCard = json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants !==
          undefined
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (!Array.isArray(restaurants)) {
        console.error("Restaurants not found or is not an array:", restaurants);
        return;
      }

      console.log("Fetched Name:", restaurants?.[0]?.info?.name);
      console.log("restaurants", restaurants);

      const extractedDetails = restaurants.map((restaurant) => {
        const { cloudinaryImageId, name, locality, areaName, avgRating } =
          restaurant.info;
        return { name, cloudinaryImageId, locality, areaName, avgRating };
      });

      console.log(extractedDetails);
      setRes(extractedDetails);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleSearch = () => {
    const filteredRes = res.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRes(filteredRes);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = res.filter((res) => res.avgRating > 4.0);
            setRes(filteredData);
          }}
        >
          Click to Restaurant to see above 4 rating
        </button>
      </div>

      <div className="restuarant-container">
        {res.map((restaurant, index) => {
          console.log("This is from body", restaurant);
          return <RestuarantCard key={index} {...restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
