import { Action } from "redux";
import { social } from "../../data/index";

const INITIAL_STATE = {
  data: social,
};

const socialReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default socialReducer;
