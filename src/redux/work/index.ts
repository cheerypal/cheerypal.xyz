import { Action } from "redux";
import { work } from "../../data/index";

const INITIAL_STATE = {
  data: work,
};

const workReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default workReducer;
