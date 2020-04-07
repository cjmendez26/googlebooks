import React from "react";
import Header from "./components/Header";
import BookCard from "./components/BookCard";
import ViewButton from "../components/Buttons/View/ViewButton";
import SaveButton from "../components/Buttons/Save/SaveButton";

function Search() {
    return (
        <div>
        <Header />
        <SearchBox />
        <BookCard />
        <ViewButton />
        <SaveButton />
        </div>
    )
} 

export default Search;