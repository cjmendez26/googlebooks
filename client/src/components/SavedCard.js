import React from "react";

function SavedCard(props){
<div className="saved_card">
<div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Author:</strong> {props.occupation}
          </li>
        </ul>
      </div> 
    
</div>
}
export default SavedCard;