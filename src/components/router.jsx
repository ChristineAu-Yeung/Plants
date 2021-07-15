import React, { useState, useEffect } from 'react';
import Header from './header';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TypePage from './typePages/typePage';
import HomePage from './homePage'
import AllTypes from './typePages/allTypes';
import { createBrowserHistory } from 'history';

function Router() {

	const [searchCriteria, setSearchCriteria] = useState("")

	const history = createBrowserHistory();

	return (
		<div>
			<Header />
			<Navbar setSearchCriteria={setSearchCriteria} />
			<BrowserRouter history={history}>
				<Switch>
					<Route exact={true} path={["/myPlants", "/"]}>
						<HomePage searchCriteria={searchCriteria} />
					</Route>
					<Route path="/settings" />
					<Route path="/AllTypes">
						<AllTypes />
					</Route>
					<Route path="/:plant">
						<TypePage />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>

	)
}

export default Router;