import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function TypeCard(props) {
	const { photos, name } = props;

	return (
		<div>
			<div className={"typeContainer"}>
				<img className={"typeImage"} src={photos} />
				<div className={"typeName"}>{name}</div>
			</div>
		</div>
	)
}

export default TypeCard;