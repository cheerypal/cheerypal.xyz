interface kanyeActions {
  FETCH_KANYE_START: string;
  FETCH_KANYE_SUCCESS: string;
  FETCH_KANYE_FAIL: string;
}

interface kanyeData {
  quote: string;
}

const kanyeActionTypes: kanyeActions = {
  FETCH_KANYE_START: "FETCH_KANYE_START",
  FETCH_KANYE_SUCCESS: "FETCH_KANYE_SUCCESS",
  FETCH_KANYE_FAIL: "FETCH_KANYE_FAIL",
};

export const fetchKanyeStart = () => ({
  type: kanyeActionTypes.FETCH_KANYE_START,
});

export const fetchKanyeSuccess = (data: kanyeData) => ({
  type: kanyeActionTypes.FETCH_KANYE_SUCCESS,
  payload: data,
});

export const fetchKanyeFail = (errorMessage: string) => ({
  type: kanyeActionTypes.FETCH_KANYE_FAIL,
  payload: errorMessage,
});

export const fetchKanyeAsync = () => {
  return async (dispatch: any) => {
    dispatch(fetchKanyeStart());
    await fetch("https://api.kanye.rest/", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => dispatch(fetchKanyeSuccess(jsonData! as kanyeData)))
      .catch((error) => dispatch(fetchKanyeFail(error)));
  };
};

const INITIAL_STATE = {
  data: "",
  isFetching: false,
  errorMessage: undefined,
};

const kanyeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case kanyeActionTypes.FETCH_KANYE_START:
      return { ...state, isFetching: true };
    case kanyeActionTypes.FETCH_KANYE_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };

    case kanyeActionTypes.FETCH_KANYE_FAIL:
      return { ...state, isFetching: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default kanyeReducer;
