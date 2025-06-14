import RestuarantCard from "./RestuarantCard";
import resList from "../src/utils/mockData";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../src/utils/constants";

const Body = () => {
  const [res, setRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body Mounted");

  useEffect(() => {
    console.log("useEffect is trigerred");
    getRestuarants();
  }, []);

  const getRestuarants = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      const name =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants?.[0]?.info?.name;
      console.log("Fetched Name:", name);
      // console.log("Data is", json);
      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log("restuarants", restaurants);
      const extractedDetails = restaurants.map((restaurant) => {
        const { cloudinaryImageId, name, locality, areaName, avgRating } =
          restaurant.info;
        return { name, cloudinaryImageId, locality, areaName, avgRating };
      });

      console.log(extractedDetails);
      setRes(extractedDetails); // These line felt something confusion later on understood 
      //These returns map of the objects array
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
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = res.filter((res) => res.avgRating > 4.0);
            setRes(filteredData);
            {
              /*console.log(resList);*/
            }
          }}
        >
          Click to Restuarnt to see above 4 rating
        </button>
      </div>
      <div className="restuarant-container">
        {res.map((restuarant, index) => {
          console.log("These is from body", restuarant);
          return <RestuarantCard key={index} {...restuarant} />;
        })}
        {/*<RestuarantCard name="Teja&Hari" cusine="West India" />*/}
      </div>
    </div>
  );
};

export default Body;
