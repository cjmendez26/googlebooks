import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SavedList from "./components/SavedList";
import ResultList from "./components/ResultList";
import SearchBox from "./components/SearchBox";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path={["/", "/saved"]}>
              <SavedList />
            </Route>
            <Route exact path={["/search"]}>
              <ResultList />
            </Route>
            <Route>
              <SearchBox />
            </Route>
          </Switch>
        </div>
      </Router>
      <Header />

    </div>
  );
}


export default App;
