import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import NoMatch from "./pages/NoMatch";
import SavedList from "./pages/SavedList";
import ResultList from "./pages/ResultList";


function App() {
  return (
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
            <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}


export default App;
