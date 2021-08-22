import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PlantCard from './PlantCard/PlantCard';
import plantsActions from '../redux/actions/plants.action';

function HomePage(props) {
	
	const dispatch = useDispatch();
	const { plants } = useSelector((state) => state.plants);

	useEffect(() => {
		setInterval(() => { dispatch(plantsActions.getPlants()) }, 60000);
	}, [])

	useEffect(() => {
		dispatch(plantsActions.getPlants());
	}, [])
	
	const getHomepagePlants = () => {
		const plantNumber = plants.length;
		const plantThird = Math.ceil(plantNumber / 3)
		// console.log({plants})
		return (
			<div>
				<div className={"flexyRow"}>
					<div>
						{plants.map((plant, index) => {
							if (index < plantThird) {
								return (
									<PlantCard key={plant.name} name={plant.name} src={plant.photos[0]} />
								)
							} else {
								return null
							}
						})}
					</div>
					<div>
						{plants.map((plant, index) => {
							if (index >= plantThird && index < 2 * plantThird) {
								return (
									<PlantCard key={plant.name} name={plant.name} src={plant.photos[0]} />
								)
								} else {
									return null
								}
						})}
					</div>
					<div>
						{plants.map((plant, index) => {
							if (index >= 2 * plantThird) {
								return (
									<PlantCard key={plant.name} name={plant.name} src={plant.photos[0]} />
								)
							} else {
								return null
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

export default HomePage;