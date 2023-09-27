const initialState = {
  athletes: [],
  isLoading: false,
  fetchError: null,
}

const athleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ATHLETES":
      return {
        ...state,
        athletes: [...state.athletes, ...action.payload]
      }
    case "CLEAR_ATHLETE_SESSION":
      return initialState
    default:
      return state
  }
}

export default athleteReducer
