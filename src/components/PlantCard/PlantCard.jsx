import React from 'react';

const PlantCard = (props) => {
	return (
		<div className="plantCard">
			<img alt="" className={"undraggable"} src={props.src} />
			<div className="name unselectable">{props.name}</div>
			<div className="info">{props.info}</div>
		</div>
	)
};

export default PlantCard;