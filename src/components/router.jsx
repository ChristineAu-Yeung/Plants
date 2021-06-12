import React, { useState, useEffect } from 'react';
import Header from './header';
import Navbar from './navBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TypePage from './typePages/typePage';
import HomePage from './homePage'

function Router() {

	const [searchCriteria, setSearchCriteria] = useState("")

	return (
		<div>
			<Header />
			<Navbar setSearchCriteria={setSearchCriteria} />
			<BrowserRouter>
				<Switch>
					<Route exact={true} path={["/myPlants", "/"]}>
							<HomePage searchCriteria={searchCriteria}/>
					</Route>
					<Route path="/settings"/>
					<Route path="/:plant">
							<TypePage/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>

	)
}

export default Router;