import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"
import SavedList from "./components/SavedList";
import ResultList from "./components/ResultList";
import SearchList from "./components/SearchList";

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
              <SearchList />
            </Route>
            <Route>
              <ResultList />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
