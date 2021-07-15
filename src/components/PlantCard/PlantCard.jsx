import React from 'react';

const PlantCard = (props) => {
	// console.log({ props })
	return (
		<div className="plantCard">
			<img className={"undraggable"} src={props.src} />
			<div className="name unselectable">{props.name}</div>
			<div className="info">{props.info}</div>
		</div>
	)
};

export default PlantCard;