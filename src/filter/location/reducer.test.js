import * as Const from "../../common/constant/constant";
import locationReducer  from "../location/reducer";

const initialState = { value: [] };

describe("test location-reducer", () => {
  it("should return no locations on passing FETCH_LOCATION_PROGRESS on page load", () => {
    expect(
      locationReducer(initialState, { type: Const.FETCH_LOCATION_PROGRESS })
    ).toEqual({
      fetching: true,
      value: []
    });
  });

  it("should return locations on passing FETCH_LOCATION_SUCCESS to reducer", () => {
    let expected = {
      fetching: false,
      value: ["Chennai", "Trichy", "Madurai"]
    };

    expect(
      locationReducer(initialState, {
        type: Const.FETCH_LOCATION_SUCCESS,
        payload: { locations: ["Chennai", "Trichy", "Madurai"] }
      })
    ).toEqual(expected);

    expect(expected.value.length).toBeGreaterThan(0);
  });

  it("should set fetching to false and error message for action type FETCH_LOCATION_FAIL", () => {
    let expected = {
      fetching: false,
      value: [],
      locationFetchErrorMessage: "error while fetching locations."
    };

    expect(
      locationReducer(initialState, {
        type: Const.FETCH_LOCATION_FAILURE,
        payload: {
          value: [],
          errorMessage: "error while fetching locations."
        }
      })
    ).toEqual(expected);

    expect(expected.locationFetchErrorMessage.length).toBeGreaterThan(0);
  });
});
