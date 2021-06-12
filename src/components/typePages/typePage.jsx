import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './typePage.scss'
import { useParams } from 'react-router-dom'
/**
 * class X extends react ...
 * ....
 * super(props);
 * this.state = {
 *      name: props.name
 * }
 * {
 *      "name": function() { alert("ruh roh raggy")}
 * }
 * 
 * const name = props.name
 */

// def getName()
// props {} {name: "MOSTIQUE"}


import PlantCard from '../PlantCard/PlantCard';

const TypePage = (props) => {
	const { plant } = useParams();
	const plantType = (plant?.length > 0  ? plant : "");
	// GET plantsType?type=Ficus
	// GET plants?plantType=Ficus
	// Ficus <=> ficus <=> ficusssss
	// GET plants?plantType=stinky
	// [] => return to / root directory
	const description = "Yo my plants are the bee's knees"
	const plants = [
		{
			name: "Ficus Lyrata",
			src: "https://images.unsplash.com/photo-1616173981402-3a526ec60ba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
			info: "Ficus, also called figs"
		},
		{
			name: "Expecto Patronum",
			src: "https://images.unsplash.com/photo-1519345743639-c48f0f418e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
			info: "Is this even real?"
		},
		{
			name: "Banana Plant",
			src: "https://images.unsplash.com/photo-1583068320978-8e2f7fde56f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hJTIwcGxhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			info: "No bananas inside"
		},
		{
			name: "Philodendron Birkin",
			src: "https://images.unsplash.com/photo-1610016025063-193600579cfc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9kZW5kcm9uJTIwYmlya2lufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
			info: "Pretty pretty"
		},
	]

	return (
		<Container>
			<Row className={"plantHeader"}>
				<Col xs={12}>
					<div className="title">{plantType}</div>
					<div className="description">{description}</div>
				</Col>
			</Row>
			<Row>
				{
					plants.map((plant) => {
						return (
							<Col sm={6} md={6} lg={3}>
								<PlantCard name={plant.name} src={plant.src} info={plant.info} />
							</Col>
						)
					})
				}
			</Row>
		</Container>
	)
}

export default TypePage;