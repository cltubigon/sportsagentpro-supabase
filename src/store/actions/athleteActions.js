import supabase from "../../config/supabaseClient"

export const SET_CURRENT_PAGE = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload })
  }
}

export const SET_ATHLETES = () => async (dispatch, getState) => {
  console.log("fetching data")
  const { currentPage, itemsPerPage } = getState().utils.pagination.athletes
  const startAt = (currentPage - 1) * itemsPerPage
  const endtAt = currentPage * itemsPerPage - 1
  console.log("currentPage: ", currentPage)
  console.log("startAt: ", startAt)
  console.log("endtAt: ", endtAt)

  const { data, error } = await supabase // fetch data from supabase
    .from("athlete")
    .select("*")
    .range((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage - 1)
    .order("id", { ascending: false })
  if (data) {
    dispatch({ type: "SET_ATHLETES", payload: data })
    console.log("data: ", data)
  } else if (error) {
    console.log("error: ", error)
  }
}

export const SET_ATHLETE_CURRENT_PAGE = () => async (dispatch, getState) => {
  const { currentPage } = getState().utils.pagination.athletes
  dispatch({ type: "SET_ATHLETE_CURRENT_PAGE", payload: currentPage + 1 })
}