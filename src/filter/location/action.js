import axios from "axios";
import * as URL from "../../common/constant/url";
import * as Const from "../../common/constant/constant";
import fetchMovies from "../../movies/actions";

export const fetchLocation = () => {
  return async dispatch => {
    dispatch({ type: Const.FETCH_LOCATION_PROGRESS });
    try {
      const locationPromise = await axios.get(URL.FETCH_LOCATION_URL);
      const locations = locationPromise.data;
      dispatch({
        type: Const.FETCH_LOCATION_SUCCESS,
        payload: {
          locations: locations
        }
      });
    } catch (error) {
      dispatch({
        type: Const.FETCH_LOCATION_FAILURE,
        payload: {
          errorMessage: error,
          locations: []
        }
      });
    }
  };
};

export const setLocation = (locationCode) => {
  return dispatch => {
    dispatch({
      type: Const.SET_LOCATION,
      payload: {
        locationCode
      }
    });

    dispatch(fetchMovieForThisLocation(locationCode));

  }
}

export const fetchMovieForThisLocation = (locationCode) => {
    return fetchMovies('NOW_SHOWING', locationCode);
}
