import { Action } from "redux";
import { social } from "../../data";

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
