let initialState = {
  userData: {},
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      console.log(...state);
      return {
        ...state,
      };
    default:
      return state;
  }
}
