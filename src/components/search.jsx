import React, { useState } from "react";

const SearchData = ({ onQueryChange }) => {
  const [searchQuery, setSearchQuery] = useState();

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onQueryChange(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="outline-none ring-1 ring-zinc-500 rounded-sm w-fit py-1 pl-2"
      />
    </div>
  );
};

export default SearchData;
