import { useState } from "react";

function AddPlantModal(props) {

	return (

		<div className="addPlantModal">
			<p>HELLO</p>
			<p>{props.showModal}</p>
			<button onClick={() => props.setShowModal(false)}>BYE</button>
		</div>
	)
}

export default AddPlantModal;