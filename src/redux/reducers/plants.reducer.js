let initialState = {
  plants: [],
  types: [],
};

export default function plants(state = initialState, action) {
  switch (action.type) {
    case "GET_PLANTS_SUCCESS":
      // console.log({ state, action })
      return {
        ...state,
        plants: action.payload,
      };
    case "GET_PLANTS_BY_TYPE_SUCCESS":
      return {
        ...state,
        plants: action.payload,
      };
    case "GET_ALL_TYPES_SUCCESS":
      return {
        ...state,
        types: action.payload,
      };
    case "ADD_PLANT_SUCESS":
      return {
        ...state,
      };
    case "UPDATE_PLANT_SUCESS":
      return {
        ...state,
      };
    default:
      return state;
  }
}
