import React from 'react';

const PlantCard = (props) => {
	console.log({ props })
	return (
		<div className="plantCard">
			<img src={props.src} />
			<div className="name">{props.name}</div>
			<div className="info">{props.info}</div>
		</div>
	)
};

export default PlantCard;