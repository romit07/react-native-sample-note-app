import * as types from "../actions/ActionsTypes";
import initialState from "./initialState";

export default function note(state = initialState.data, action) {
  switch (action.type) {
    case types.SAVE_NOTE: {
      return {
        ...state,
        [action.data.id]: action.data
      };
    }
    case types.DELETE_NOTE: {
      return {
        state: _.omit(state, [action.data.id])
      };
    }
    default:
      return state;
  }
}
