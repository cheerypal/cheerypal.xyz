import { Action } from "redux";
import { projects } from "../../data/index";

const INITIAL_STATE = {
  data: projects,
};

const projectReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectReducer;
