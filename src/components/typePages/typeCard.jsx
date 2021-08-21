import React from 'react';

function TypeCard(props) {
	
	const { photos, name } = props;

	return (
		<div>
			<div className={"typeContainer"}>
				<img alt="" className={"typeImage"} src={photos} />
				<div className={"typeName"}>{name}</div>
			</div>
		</div>
	)
}

export default TypeCard;