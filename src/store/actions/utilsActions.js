export const SET_CURRENT_PAGE = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload })
  }
}