import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import TypePage from "./TypePages/TypePage";
import HomePage from "./HomePage";
import AllTypes from "./TypePages/AllTypes";
import SignUpPage from "./SignUpLoginPages/SignUpPage";

function HomePageRouter() {
  const [searchCriteria, setSearchCriteria] = useState("");
  const history = createBrowserHistory();

  return (
    <div>
      <Header />
      <Navbar setSearchCriteria={setSearchCriteria} />
      <Router history={history}>
        <Switch>
          <Route exact={true} path={["/myPlants", "/"]}>
            <HomePage searchCriteria={searchCriteria} />
          </Route>
          <Route path="/AllTypes">
            <AllTypes />
          </Route>
          <Route path="/SignUp">
            <SignUpPage />
          </Route>
          <Route path="/:plant">
            <TypePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default HomePageRouter;
