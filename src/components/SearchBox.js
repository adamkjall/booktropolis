import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
      <input
        className="br3 ba b--black bw1 mh2"
        type="search"
        placeholder=" Search for book"
        onChange={searchChange}
      />
  );
};

export default SearchBox;
