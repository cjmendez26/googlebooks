import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    <span className="delete-button" {...props} role="button">Delete
    </span>
  );
}

export default DeleteButton;