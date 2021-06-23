import plantsService from '../services/plants.service';

const getPlants = () => {
	return dispatch => {
		plantsService.getPlants()
			.then(res => {
				dispatch(success(res)) // <--- res will good solution, where res = array of plant data [{'name': 'Fiscsus'}, ...]
			})
			.catch((error) => {
				dispatch(failure(error)) // <--- error will be like error message
			})
	}

	function success(payload) { return { type: 'GET_PLANTS_SUCCESS', payload } } // <-- payload is array of plant data [{'name': 'Fiscsus'}, ...]
	function failure(error) { return { type: 'GET_PLANTS_FAILURE', error } }
}

const getPlantsbyType = (plantType) => {
	return dispatch => {
		plantsService.getPlantsbyType(plantType)
			.then(res => {
				dispatch(success(res)) // <--- res will good solution, where res = array of plant data [{'name': 'Fiscsus'}, ...]
			})
			.catch((error) => {
				dispatch(failure(error)) // <--- error will be like error message
			})
	}

	function success(payload) { return { type: 'GET_PLANTS_BY_TYPE_SUCCESS', payload } } // <-- payload is array of plant data [{'name': 'Fiscsus'}, ...]
	function failure(error) { return { type: 'GET_PLANTS_BY_TYPE_FAILURE', error } }
}


const plantsActions = {
	getPlants,
	getPlantsbyType
}

export default plantsActions;
