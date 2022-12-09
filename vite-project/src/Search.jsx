import React from "react";

function Search({search, setSearch}) {
    function handleSearchChange(event) {
        setSearch(event.target.value);
    }

    return (
       <div className="searchbar">
        <div>
        <label htmlFor="search" className="searchText">Search by Shoe Name or Shoe Color</label>
        </div>
        <div className="searchBarText">
        <input 
        type="text"
        id="search"
        placeholder="Search for Shoe..."
        onChange={handleSearchChange}
        value={search}
        />
        </div>
       </div>
    )
}
export default Search;