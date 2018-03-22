import * as Const from "../../common/constant/constant";

const locationReducer = function(state = {value: []}, action) {
  switch (action.type) {
    case Const.FETCH_LOCATION_PROGRESS:
      return { ...state, fetching: true, value: [] };
    case Const.FETCH_LOCATION_SUCCESS:
      return { ...state, fetching: false, value: action.payload.locations };
    case Const.FETCH_LOCATION_FAILURE:
      return {
        ...state,
        fetching: false,
        value: [],
        locationFetchErrorMessage: action.payload.errorMessage
      };
    case Const.SET_LOCATION: {
      return {
        ...state,selectedLocation:action.payload.locationCode
      };
    }
    default:
      return state;
  }
};

export default locationReducer;
