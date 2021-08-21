import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
import Kaisa from '../Images/Kaisa.jpg';
import DropDown from './DesktopDropDown';
import AddPlantModal from './AddPlantModal';

function NavBar({ setSearchCriteria }) {

	const [showModal, setShowModal] = useState(false);

	// function search(name) {
	// 	setSearchCriteria(name !== undefined && typeof (name) === "string" ? name : searchName);
	// }
	// function update(e) {
	// 	console.log(e)
	// 	setSearchName(e.target.value);
	// 	if (e.target.value.length < 1) search("")
	// }
	// let [searchName, setSearchName] = useState("")

	// let history = useHistory();
  // const redirect = () => {
  //   history.push('/myPlants')
  // }
	
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
								<a href='/myPlants' className="NavBarLinks">myPlants</a>
								<DropDown />
								<a href="AllTypes" className="NavBarLinks genusTitle">Genus</a>
							</div>
							<div className="rightNavBar">
								{/* {console.log(showModal)} */}
								<button className="navBarButton" onClick={() => setShowModal(true)}>Add a Plant</button>
								<img alt="" className="avatarImage" src={Kaisa} />
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
