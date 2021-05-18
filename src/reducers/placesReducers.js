export default function placesReducer(state, action) {
  switch (action.type) {
    case 'SET_PLACES':
      return {
        ...state,
        places: action.payload,
      }
      break

    default:
      return state;
  }
}
