import { 
  FETCH_EXPERIENCES_FAILURE, 
  FETCH_EXPERIENCES_REQUEST, 
  FETCH_EXPERIENCES_SUCCESS 
} from "../Types"

const fetchExperiencesRequest = () => {
  return {
    type: FETCH_EXPERIENCES_REQUEST,
  }
}

const fetchExperiencesSuccess = (experiences) => {
  return {
    type: FETCH_EXPERIENCES_SUCCESS,
    payload: experiences.data
  }
}

const fetchExperiencesFailure = (error) => {
  return {
    type: FETCH_EXPERIENCES_FAILURE,
    payload: error
  }
}

export const fetchExperiences = () => {
  return async (dispatch) => {
    dispatch(fetchExperiencesRequest)
    try {
      const res = await fetch('http://localhost:5000/api/experiences')
      const data = await res.json()
      setTimeout(() => {
        dispatch(fetchExperiencesSuccess(data))
      }, 3000)
    } catch (error) {
      dispatch(fetchExperiencesFailure(error.message))
    }
  }
}
