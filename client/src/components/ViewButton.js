import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewButton(props) {
  return (
    <span className="view-button" {...props} role="button">
    View
    </span>
  );
}

export default ViewButton;