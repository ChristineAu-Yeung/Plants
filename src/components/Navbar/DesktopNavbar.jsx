import React, { useState } from 'react';
import kaisa from '../images/kai.jpg';
import DropDown from './dropDown';
import { Row, Col } from 'react-bootstrap';
import AddPlantModal from './AddPlantModal';

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

	const [showModal, setShowModal] = useState(false);

	return (

		<div>
			{
				showModal &&
				<AddPlantModal showModal={showModal} setShowModal={(showModal) => setShowModal(showModal)} />
			}
			<div>
				<Row>
					<Col>
						<div className="tempNavBar">
							<div className="leftNavBar">
								<div href="/myPlants">myPlants</div>
								<DropDown />
								<div className="genusTitle">Genus</div>
							</div>
							<div className="rightNavBar">
								{console.log(showModal)}
								<button className="navBarButton" onClick={() => setShowModal(true)}>Add a Plant</button>
								<img className="avatarImage" src={kaisa} />
								<input className="navBarInput" placeholder="Search" />
								<button className="navBarButton">Search</button>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default NavBar;