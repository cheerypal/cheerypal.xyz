import { mates } from "../../data";

const INITIAL_STATE = {
  data: mates,
};

const mateReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mateReducer;
