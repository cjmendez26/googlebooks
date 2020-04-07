import React, {Component} from "react";
import Header from "./components/Header";
import BookCard from "../components/BookCard/BookCard";
import ViewButton from "../components/Buttons/View/ViewButton";
import DeleteButton from "../components/Buttons/View/DeleteButton";

function Saved() {
    return (
        <div>
        <Header />
        <BookCard />
        <ViewButton />
        <DeleteButton />
        </div>
    )
} 

export default Saved;