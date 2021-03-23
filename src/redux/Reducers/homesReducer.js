import { 
  FETCH_HOMES_REQUEST, 
  FETCH_HOMES_SUCCESS, 
  FETCH_HOTELS_FAILURE
} from "../Types"

const initialState = {
  homes: [],
  loading: true,
  error: ''
}

const fetchHomesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_HOMES_REQUEST: return {
      ...state,
      loading: true
    }
    case FETCH_HOMES_SUCCESS: return {
      ...state,
      homes: action.payload,
      loading: false
    }
    case FETCH_HOTELS_FAILURE: return {
      ...state,
      error: action.payload,
      loading: false
    }
    default: return state
  }
}

export default fetchHomesReducer;