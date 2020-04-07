import React from "react";
import SearchButton from "../Buttons/Search/SearchButton"
// "https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse"

function SearchBox(props){
    return(
<div className="search_box">
    <a><h5>Book Search</h5></a>
    <h6>Book</h6>
    <input>book name</input>
    <SearchButton />
<div>
 
</div>
</div>
    )}
export default SearchBox;