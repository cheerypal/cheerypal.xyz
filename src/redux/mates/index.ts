import { Action } from "redux";
import { mates } from "../../data/index";

const INITIAL_STATE = {
  data: mates,
};

const mateReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mateReducer;
