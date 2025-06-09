import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
  const [res, setRes] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = resList.filter((res) => res.rating > "4.0");
            setRes(filteredData);
            console.log(resList);
          }}
        >
          Click to Restuarnt to see above 4 rating
        </button>
      </div>
      <div className="restuarant-container">
        {res.map((restuarant) => {
          return (
            <RestuarantCard key={restuarant.id} resturantList={restuarant} />
          );
        })}
        {/*<RestuarantCard name="Teja&Hari" cusine="West India" />*/}
      </div>
    </div>
  );
};

export default Body;
