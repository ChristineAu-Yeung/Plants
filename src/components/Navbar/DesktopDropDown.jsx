import { useState } from "react";
import { useSelector } from 'react-redux';

function DropDown(props) {

	const [active, setActive] = useState(false);
	const { plants } = useSelector((state) => state.plants);
	// const types = plants ? plants.filter((plant, index) => plants.indexOf(plant) === index) : []
	const types = []
	for (let plant of plants) {
		if (types.indexOf(plant.type.trim()) === -1) {
			types.push(plant.type.trim())
		}
	}

	return (
		<div className="dropDown" onMouseLeave={() => setActive(false)}>
			<div className="dropDownTitle" onClick={() => setActive(!active)}>Types</div>
			<div className={`dropDownContent ${active ? 'active' : ''}`}>
				{types.map((type) => {
					return(<a key={type} href={`/${type}`}>{type}</a>)
				})}
				{/* <a href="/Ficus">Ficus</a>
				<a href="/Philodendron">Philodendron</a> */}
			</div>
		</div>
	)
}

export default DropDown;