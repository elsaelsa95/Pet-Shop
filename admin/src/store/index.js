import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "./middleware/logger";
import thunk from "redux-thunk";

const initialState = {
 
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;