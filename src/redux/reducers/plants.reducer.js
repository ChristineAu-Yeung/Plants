let initialState = {
	plants: []
}

export default function plants(state = initialState, action) {
	switch (action.type) {
		case 'GET_PLANTS_SUCCESS':
			console.log({ state, action })
			return {
				...state,
				plants: action.payload,
			}
		case 'GET_PLANTS_BY_TYPE_SUCCESS':
			console.log({ state, action })
			return {
				...state,
				plants: action.payload,
			}
		default:
			return state;
	}
}