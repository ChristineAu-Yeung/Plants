import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './typePage.scss'
import { useParams } from 'react-router-dom'
import { connect } from "react-redux";
import PlantCard from '../PlantCard/PlantCard';
import plantsActions from '../../redux/actions/plants.action';

const TypePage = (props) => {
	const { dispatch } = props;
	const { plant } = useParams();
	const plantType = (plant?.length > 0  ? plant : "");

	const description = "Yo my plants are the bee's knees";

	const { plants } = props;

	useEffect(() => {
		setInterval(() => { dispatch(plantsActions.getPlantsbyType(plantType)) }, 60000);
	}, [])

	useEffect(() => {
		dispatch(plantsActions.getPlantsbyType(plantType));
	}, [])

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
								<PlantCard name={plant.name} src={plant.photos} />
							</Col>
						)
					})
				}
			</Row>
		</Container>
	)
}

function mapStateToProps(state) {
	const { plants } = state;
	return {
		plants: plants.plants
	}
}

export default connect(mapStateToProps)(TypePage);