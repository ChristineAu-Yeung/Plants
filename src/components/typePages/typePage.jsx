import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './typePage.scss'

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

	const plantType = "Ficus"
	const description = "Yo my plants are the bee's knees"
	const plants = [
		{
			name: "Tendy Plant",
			src: "https://images.unsplash.com/photo-1616173981402-3a526ec60ba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
			info: "Ficus, also called figs"
		},
		{
			name: "Expecto Patronum",
			src: "https://images.unsplash.com/photo-1519345743639-c48f0f418e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
			info: "Is this even real?"
		}
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
							<Col xs={3}>
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