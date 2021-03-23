import { 
  FETCH_HOTELS_FAILURE, 
  FETCH_HOTELS_REQUEST, 
  FETCH_HOTELS_SUCCESS, 
  HANDLE_SELECT_HOTEL, 
  HOTELS_SEARCH_KEY
} from "../Types"


const initialState = {
  hotels: [],
  loading: true,
  error: '',
  searchItem: [],
  selectedHotel: null
}

const fetchHotelsReducers = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_HOTELS_REQUEST: return {
      ...state,
      loading: true
    }
    case FETCH_HOTELS_SUCCESS: return {
      ...state,
      hotels: action.payload,
      loading: false
    }
    case FETCH_HOTELS_FAILURE: return {
      ...state,
      error: action.payload,
      loading: false
    }
    case HOTELS_SEARCH_KEY: return {
      ...state,
      searchItem: action.payload.item
    }
    case HANDLE_SELECT_HOTEL: return {
      ...state,
      selectedHotel: action.payload.item
    }
    default: return state
  }
}

export default fetchHotelsReducers;