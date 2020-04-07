import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveButton(props) {
  return (
    <span className="save-button" {...props} role="button">
    Save
    </span>
  );
}

export default SaveButton;