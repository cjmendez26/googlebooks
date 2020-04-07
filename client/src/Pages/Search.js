import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import SearchList from "./components/SearchList";

function Search() {
    return (
        <div>
        <Nav />
        <Header />
        <SearchBox />
        <SearchList/>
        </div>
    )
} 

export default search;