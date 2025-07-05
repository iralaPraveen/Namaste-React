// import RestuarantCard from "./RestuarantCard";
// import { useState, useEffect } from "react";
// import { SWIGGY_API_URL } from "../src/utils/constants";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const Body = () => {
//   const [res, setRes] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   // console.log("Body Mounted");

//   useEffect(() => {
//     // console.log("useEffect is triggered");
//     getRestuarants();
//   }, []);

//   const getRestuarants = async () => {
//     try {
//       const data = await fetch(SWIGGY_API_URL);
//       const json = await data.json();

//       // Log the response structure (optional, helpful for debugging)
//       // console.log("Full API Response:", JSON.stringify(json, null, 2));

//       // Dynamically find the card that contains restaurant data
//       const restaurantCard = json?.data?.cards?.find(
//         (card) =>
//           card?.card?.card?.gridElements?.infoWithStyle?.restaurants !==
//           undefined
//       );

//       const restaurants =
//         restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//       // console.log("Fetched Name:", restaurants?.[0]?.info?.name);
//       // console.log("restaurants", restaurants);

//       const extractedDetails = restaurants.map((restaurant) => {
//         const { cloudinaryImageId, name, locality, areaName, avgRating } =
//           restaurant.info;
//         return { name, cloudinaryImageId, locality, areaName, avgRating };
//       });

//       // console.log(extractedDetails);
//       setRes(extractedDetails);
//     } catch (error) {
//       console.error("Error fetching restaurants:", error);
//     }
//   };

//   const handleSearch = () => {
//     const filteredRes = res.filter((restaurant) =>
//       restaurant.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setRes(filteredRes);
//   };

//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false) {
//     return <h1>YOur or Offline</h1>;
//   } else {
//     return (
//       <div className="body">
//         <div className="filter">
//           <div className="search">
//             <input
//               type="text"
//               className="search-box"
//               value={searchText}
//               onChange={(e) => {
//                 setSearchText(e.target.value);
//               }}
//             />
//             <button onClick={handleSearch}>Search</button>
//           </div>
//           <button
//             className="filter-btn"
//             onClick={() => {
//               const filteredData = res.filter((res) => res.avgRating > 4.0);
//               setRes(filteredData);
//             }}
//           >
//             Click to Restaurant to see above 4 rating
//           </button>
//         </div>

//         <div className="restuarant-container">
//           {res.map((restaurant, index) => {
//             // console.log("This is from body", restaurant);
//             return <RestuarantCard key={index} {...restaurant} />;
//           })}
//         </div>
//       </div>
//     );
//   }
// };

// export default Body;
import RestuarantCard from "./RestuarantCard";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [res, setRes] = useState([]);
  const [allRes, setAllRes] = useState([]); // Preserve original data
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();

      const restaurantCard = json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants !==
          undefined
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (!restaurants) {
        throw new Error("Restaurant data not found");
      }

      const extractedDetails = restaurants.map((restaurant) => {
        const { id, cloudinaryImageId, name, locality, areaName, avgRating } =
          restaurant.info;
        return { id, name, cloudinaryImageId, locality, areaName, avgRating };
      });

      setAllRes(extractedDetails);
      setRes(extractedDetails);
    } catch (error) {
      console.error("Error fetching restaurants:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const filteredRes = allRes.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setRes(filteredRes);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You are offline. Please check your internet connection.</h1>;
  }

  if (isLoading) {
    return <h1>Loading restaurants...</h1>;
  }
  // debugger;->These helped to trace wheather it is online or offline
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = allRes.filter((res) => res.avgRating > 4.0);
            setRes(filteredData);
          }}
        >
          Show Restaurants with Rating Above 4
        </button>
      </div>

      <div className="restuarant-container">
        {res.length > 0 ? (
          res.map((restaurant) => (
            <RestuarantCard
              key={restaurant.id || restaurant.name}
              {...restaurant}
            />
          ))
        ) : (
          <h2>No restaurants found.</h2>
        )}
      </div>
    </div>
  );
};

export default Body;
