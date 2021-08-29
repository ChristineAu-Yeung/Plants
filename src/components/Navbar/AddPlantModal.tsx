import { useState } from "react";
import { useDispatch } from "react-redux";
import plantsActions from '../../redux/actions/plants.action'

interface modalProps {
	setShowModal: (b: boolean) => void
}

function AddPlantModal(props: modalProps) {

	const [ plantName, setPlantName ] = useState("")
	const [ plantType, setPlantType ] = useState("")
	const [ plantImage, setPlantImage ] = useState("")

	const dispatch = useDispatch();

	function submitPlant() {
		if (!validatePlantInfo) { return null }
		props.setShowModal(false)
		dispatch(plantsActions.addPlant( {name: plantName, type: plantType, photos: [plantImage]} ))
	}
	
	function validatePlantInfo() {
		if (plantName.length > 0 && plantType.length > 0 && plantImage.length > 0) { 
			return true
		} else {
			return false
		}
	}

	return (
		<div className="addPlantModal">
			<div className="plantModalInfo">
				<div className="modalTitle">Enter Plant Details</div>
				<div className="modalPlantInfo">
					<p className="modalLabel">Name</p>
					<input className="modalInput" id="plantName" onChange={(e) => setPlantName(e.currentTarget.value) } value={plantName} placeholder="Enter Plant Name"/>
				</div>
				<div className="modalPlantInfo">
					<p className="modalLabel">Type</p>
					<input className="modalInput" id="plantType" onChange={(e) => setPlantType(e.currentTarget.value) } value={plantType} placeholder="Enter Plant Type"/>
				</div>
				<div className="modalPlantInfo">
					<p className="modalLabel">Image Link</p>
					<input className="modalInput" id="plantImage" onChange={(e) => setPlantImage(e.currentTarget.value) } value={plantImage} placeholder="Enter an Image Link"/>
				</div>
				<div className="modalButtons">
					<button className="modalCancelButton" onClick={() => props.setShowModal(false)}>Cancel</button>
					<button className="modalSubmitButton" disabled={!validatePlantInfo()} onClick={() => submitPlant()}>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default AddPlantModal;