import React from 'react';
import Kaisa from '../Images/Kaisa.jpg';
import { Row, Col } from 'react-bootstrap';
import MobileDropdown from './MobileDropdown';

function MobileNavbar({ setSearchCriteria }) {

	return (
		<Row>
			<Col>
				<div href="/myPlants">myPlants</div>
				<img alt="" className="avatarImage" src={Kaisa} />
				<MobileDropdown/>
			</Col>
		</Row>
	)
}

export default MobileNavbar;