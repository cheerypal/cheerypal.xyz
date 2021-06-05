import { Action } from "redux";
import { uni, additional } from "../../data/index";

const INITIAL_STATE = {
  uni,
  additional,
};

const projectReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectReducer;
