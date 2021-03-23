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
      const res = await fetch('http://localhost:5000/api/homes')
      const data = await res.json()
      setTimeout(() => {
        dispatch(fetchHomesSuccess(data))
      },3000)
    } catch (e) {
      dispatch(fetchHomesFailure(e.message))
    }
  }
}