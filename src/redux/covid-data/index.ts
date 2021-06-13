const url =
  "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=scotland&structure={%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22,%22newDeaths%22:%22newDeaths28DaysByPublishDate%22}";

interface covidActions {
  FETCH_COVID_START: string;
  FETCH_COVID_SUCCESS: string;
  FETCH_COVID_FAIL: string;
}

interface covidData {
  date: string;
  newCase: number;
  newDeaths: number;
}

const covidActionTypes: covidActions = {
  FETCH_COVID_START: "FETCH_COVID_START",
  FETCH_COVID_SUCCESS: "FETCH_COVID_SUCCESS",
  FETCH_COVID_FAIL: "FETCH_COVID_FAIL",
};

export const fetchCovidStart = () => ({
  type: covidActionTypes.FETCH_COVID_START,
});

export const fetchCovidSuccess = (data: covidData) => ({
  type: covidActionTypes.FETCH_COVID_SUCCESS,
  payload: data,
});

export const fetchCovidFail = (errorMessage: string) => ({
  type: covidActionTypes.FETCH_COVID_FAIL,
  payload: errorMessage,
});

export const fetchCovidAsync = () => {
  return async (dispatch: any) => {
    dispatch(fetchCovidStart());
    await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((jsonData) =>
        dispatch(fetchCovidSuccess(jsonData.data[0]! as covidData))
      )
      .catch((err) => dispatch(fetchCovidFail(err)));
  };
};

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  errorMessage: undefined,
};

const covidReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case covidActionTypes.FETCH_COVID_START:
      return { ...state, isFetching: true };
    case covidActionTypes.FETCH_COVID_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case covidActionTypes.FETCH_COVID_FAIL:
      return { ...state, isFetching: false, errorMessage: action.payload };

    default:
      return state;
  }
};

export default covidReducer;
