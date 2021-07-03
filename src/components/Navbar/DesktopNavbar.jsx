import React, { useState } from 'react';
import kaisa from '../images/kai.jpg';
import DropDown from './dropDown';
import { Container, Row, Col } from 'react-bootstrap';

function NavBar({ setSearchCriteria }) {

	function search(name) {
		// console.log(searchName);
		// console.log("here", (name && typeof(name) === "string"))
		setSearchCriteria(name !== undefined && typeof (name) === "string" ? name : searchName);
	}

	function update(e) {
		console.log(e)
		setSearchName(e.target.value);
		// console.log(e.target.value)
		if (e.target.value.length < 1) search("")
	}

	let [searchName, setSearchName] = useState("")
	// type and function return 
	// let [a,b] = [0,1]
	// console.log({a,b})

	const [temp, setTemp] = useState("")

	function logButtonName(e) {
		console.log(e.target.text);
	}

	return (

		<Row>
			<Col>
				<div className="tempNavBar">
					<div className="leftNavBar">
						<div href="/myPlants">myPlants</div>
						<DropDown />
						<div className="genusTitle">Genus</div>
					</div>
					<div className="rightNavBar">
						<button className="navBarButton">Add a Plant</button>
						<img className="avatarImage" src={kaisa} />
						<input className="navBarInput" placeholder="Search" />
						<button className="navBarButton">Search</button>
					</div>
				</div>
			</Col>
		</Row>

	)
}

export default NavBar;