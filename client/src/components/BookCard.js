import React from "react";

function BookCard(props){

    return(
<div className="book_card">
        <ul>
          <li>
            <strong>Titles:</strong> {props.title}
          </li>
          <li>
            <strong>Author:</strong> {props.author}
          </li>
        </ul>
        <div>
        <img alt={props.name} src={props.image} /> {props.description}
        </div>
</div>

    )}
export default BookCard;