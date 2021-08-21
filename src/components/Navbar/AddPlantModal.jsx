function AddPlantModal(props) {

	return (
		<div className="addPlantModal">
			<div className="modalTitle">Enter Plant Details</div>
			<div className="modalPlantInfo">
				<p className="modalLabel">Name</p>
				<input className="modalInput" placeholder="Enter Plant Name"/>
			</div>
			<div className="modalPlantInfo">
				<p className="modalLabel">Type</p>
				<input className="modalInput" placeholder="Enter Plant Type"/>
			</div>
			<div className="modalPlantInfo">
				<p className="modalLabel">Image Link</p>
				<input className="modalInput" placeholder="Enter an Image Link"/>
			</div>
			<div className="modalButtons">
				<button className="modalCancelButton" onClick={() => props.setShowModal(false)}>Cancel</button>
				<button className="modalSubmitButton" onClick={() => props.setShowModal(false)}>Submit</button>
			</div>
		</div>
	)
}

export default AddPlantModal;