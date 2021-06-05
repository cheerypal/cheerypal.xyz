import { work } from "../../data";

const INITIAL_STATE = {
  data: work,
};

const workReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default workReducer;
