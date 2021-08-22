let initialState = {
	plants: []
}

export default function plants(state = initialState, action) {
	switch (action.type) {
		case 'GET_PLANTS_SUCCESS':
			// console.log({ state, action })
			return {
				...state,
				plants: action.payload,
			}
		case 'GET_PLANTS_BY_TYPE_SUCCESS':
			return {
				...state,
				plants: action.payload,
			}
		case 'ADD_PLANT_SUCESS':
			return {
				...state
			}
		default:
			return state;
	}
}