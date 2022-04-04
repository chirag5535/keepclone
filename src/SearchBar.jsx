import React from "react";

const SearchBar = ({ searchEvent, search }) => {
  return (
    <>
      <input
        type="search"
        id="gsearch"
        placeholder="Search Notes"
        onChange={searchEvent}
        value={search}
        autoComplete="off"
      />
    </>
  );
};

export default SearchBar;
