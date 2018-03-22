import axios from "axios";
import * as URL from "../../common/constant/url";
import * as Const from "../../common/constant/constant";

const fetchLocation = () => {
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

export default fetchLocation;
