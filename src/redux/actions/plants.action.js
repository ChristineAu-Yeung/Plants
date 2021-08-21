import plantsService from '../services/plants.service';

const getPlants = () => {
	return dispatch => {
		plantsService.getPlants()
			.then(res => {
				dispatch(success(res))
			})
			.catch((error) => {
				dispatch(failure(error))
			})
	}

	function success(payload) { return { type: 'GET_PLANTS_SUCCESS', payload } } 
	function failure(error) { return { type: 'GET_PLANTS_FAILURE', error } }
}

const getPlantsbyType = (plantType) => {
	return dispatch => {
		plantsService.getPlantsbyType(plantType)
			.then(res => {
				dispatch(success(res))
			})
			.catch((error) => {
				dispatch(failure(error))
			})
	}

	function success(payload) { return { type: 'GET_PLANTS_BY_TYPE_SUCCESS', payload } }
	function failure(error) { return { type: 'GET_PLANTS_BY_TYPE_FAILURE', error } }
}


const plantsActions = {
	getPlants,
	getPlantsbyType
}

export default plantsActions;
