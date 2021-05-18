export default function placeReducer(state, action) {
  switch (action.type) {
    case "SET_PLACES":
      return {
        ...state,
        places: action.payload,
        loading: false,
      };
      break;

    default:
      return state;
  }
}
