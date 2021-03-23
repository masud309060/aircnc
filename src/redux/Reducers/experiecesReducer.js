import { FETCH_EXPERIENCES_FAILURE, FETCH_EXPERIENCES_REQUEST, FETCH_EXPERIENCES_SUCCESS } from "../Types";

const initialState = {
  experiences: [],
  error: '',
  loading: true
}

const fetchExperiencesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_EXPERIENCES_REQUEST: return {
      ...state,
      loading: true,
    }
    case FETCH_EXPERIENCES_SUCCESS: return {
      ...state,
      experiences: action.payload,
      loading: false,
    }
    case FETCH_EXPERIENCES_FAILURE: return {
      ...state,
      error: action.payload,
      loading: false,
    }
    default: return state
  }
}

export default fetchExperiencesReducer;