import { useState } from "react";

const Search = () => {
    const [searchText, setSearchText] = useState("ff");
    // console.log("These counts how many times a component is beign rendered");
  return (
    <div>
      <input
        id="search-box"
        type="search"
        placeholder="Enter the text to search"
        value={searchText}
              onChange={(e) => { setSearchText(e.target.value) }}
      />
      <button
        onClick={() => {
          console.log(searchText);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default Search;
