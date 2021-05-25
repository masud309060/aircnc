import { 
  FETCH_HOMES_REQUEST, 
  FETCH_HOMES_SUCCESS,
  FETCH_HOMES_FAILURE
} from "../Types"

const fetchHomesRequest = () => {
  return {
    type: FETCH_HOMES_REQUEST
  }
}

const fetchHomesSuccess = (homes) => {
  return {
    type: FETCH_HOMES_SUCCESS,
    payload: homes.data
  }
}

const fetchHomesFailure = (error) => {
  return {
    type: FETCH_HOMES_FAILURE,
    payload: error
  }
}


export const fetchHomes = () => {
  return async (dispatch) => {
    dispatch(fetchHomesRequest)
    try {
      const res = await fetch('https://aircnc-server-4.herokuapp.com/api/homes')
      const data = await res.json()
      dispatch(fetchHomesSuccess(data))
    } catch (e) {
      dispatch(fetchHomesFailure(e.message))
    }
  }
}