import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SearchButton(props) {
  return (
    <span className="search-button" {...props} role="button">
    Search
    </span>
  );
}

export default SearchButton;