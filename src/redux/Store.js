import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { authenticationReducers } from "./Reducers/authenticationReducers";
import fetchExperiencesReducer from "./Reducers/experiecesReducer";
import fetchHomesReducer from "./Reducers/homesReducer";
import fetchHotelsReducers from "./Reducers/hotelsReducers";


const store = createStore(combineReducers({
  authentication: authenticationReducers,
  experiences: fetchExperiencesReducer,
  homes: fetchHomesReducer,
  hotels: fetchHotelsReducers,
}), composeWithDevTools( 
  applyMiddleware( logger, thunk )
  ))

export default store;