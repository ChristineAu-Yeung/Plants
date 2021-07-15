import { Container, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard/PlantCard';
import { connect } from "react-redux";
import plantsActions from '../redux/actions/plants.action';
// save jwt to cookie

function HomePage(props) {
	const { dispatch } = props;
	const { plants } = props;

	useEffect(() => {
		setInterval(() => { dispatch(plantsActions.getPlants()) }, 60000);
	}, [])

	useEffect(() => {
		dispatch(plantsActions.getPlants());
	}, [])
	
	const getHomepagePlants = () => {
		const plantNumber = plants.length;
		const plantThird = Math.ceil(plantNumber / 3)
		return (
			<div>
				<div className={"flexyRow"}>
					<div>
						{plants.map((plant, index) => {
							if (index < plantThird) {
								return (
									<PlantCard name={plant.name} src={plant.photos[0]} />
								)
							}
						})}
					</div>
					<div>
						{plants.map((plant, index) => {
							if (index >= plantThird && index < 2 * plantThird) {
								return (
									<PlantCard name={plant.name} src={plant.photos[0]} />
								)
							}
						})}
					</div>
					<div>
						{plants.map((plant, index) => {
							if (index >= 2 * plantThird) {
								return (
									<PlantCard name={plant.name} src={plant.photos[0]} />
								)
							}
						})}
					</div>
				</div>
			</div>
		)
	}
	return (
		<>
		{
			getHomepagePlants()
		}
		</>
	)
}

function mapStateToProps(state) {
	// console.log({ state })
	const { plants } = state;
	return {
		plants: plants.plants
	}
}

export default connect(mapStateToProps)(HomePage);