import React, { useState } from 'react';
import kaisa from '../images/kai.jpg';
import DropDown from './dropDown';
import { Container, Row, Col } from 'react-bootstrap';
import MobileDropdown from './MobileDropdown';

function MobileNavbar({ setSearchCriteria }) {

	return (

		<Row>
			<Col>
				<div href="/myPlants">myPlants</div>
				<img className="avatarImage" src={kaisa} />
				<MobileDropdown/>
			</Col>
		</Row>

	)
}

export default MobileNavbar;