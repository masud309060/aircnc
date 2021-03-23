import { 
  FETCH_HOTELS_REQUEST, 
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE,
  HOTELS_SEARCH_KEY,
  HANDLE_SELECT_HOTEL
} from "../Types"

const fetchHotelsRequest = () => {
  return {
    type: FETCH_HOTELS_REQUEST
  }
}

const fetchHotelsSuccess = (homes) => {
  return {
    type: FETCH_HOTELS_SUCCESS,
    payload: homes.data
  }
}

const fetchHotelsFailure = (error) => {
  return {
    type: FETCH_HOTELS_FAILURE,
    payload: error
  }
}


export const fetchHotels = () => {
  return async (dispatch) => {
    dispatch(fetchHotelsRequest)
    try {
      const res = await fetch('http://localhost:5000/api/hotels')
      const data = await res.json()
        dispatch(fetchHotelsSuccess(data))
    } catch (e) {
      dispatch(fetchHotelsFailure(e.message))
    }
  }
}

export const hotelsSearchKey = (searchItem) => {
  return dispatch => {
    dispatch({
      type: HOTELS_SEARCH_KEY,
      payload: {
        item: searchItem
      }
    })
  }
}

export const handleSelectHotel = (selectedHotel) => {
  return dispatch => {
    dispatch({
      type: HANDLE_SELECT_HOTEL,
      payload: {
        item: selectedHotel
      }
    })
  }
}
