import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi"; /* <BiSearch /> */

export default function SearchBox() {
  const [query, setQuery] = useState("");
  /*  const [searchResults, setSearchResults] = useState([]); */

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/search?query=${query}`
      );
      if (response.ok) {
        const data = await response.json();

        Navigate("/SearchResults", { searchData: data });
        /* setSearchResults(data); */
      } else {
        console.error("Error with search query.", error);
      }
    } catch (error) {
      console.error("Server error", error);
    }
  };

  return (
    <>
      <div className="flex items-center">
        <div className="flex space-x-1">
          <input
            type="text"
            className="block w-full px-4 py-2 text-black bg-white border rounded-full focus:border-red-900 focus:ring focus:ring-opacity-40"
            placeholder="Sök..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="px-4 text-white bg-sky-600 rounded-full">
            <BiSearch onClick={handleSearch} />
          </button>
        </div>
      </div>
      {/*     {searchResults.map((result) => (
        <div key={result.id}>
          <p>result.title</p>
        </div> 
      ))} */}
    </>
  );
}
