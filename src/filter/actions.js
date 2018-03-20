import fetchMovies from '../movies/actions';

function doUpdateAction(filterAction) {
    return (dispatch, getState) => {
        dispatch({type: filterAction});
        fetchMovies(getState().filter.listingType)(dispatch);
    }
};

const changeListingFilterAndFetchData = (dispatch) => {
    return {
        changeListingType: (filterAction) => {
            dispatch(doUpdateAction(filterAction));
        }
    }
};

export default changeListingFilterAndFetchData;
export const UPDATE_TO_NOW_SHOWING = 'CHANGE_LISTING_TO_NOW_SHOWING';
export const UPDATE_TO_UPCOMING_RELEASE = 'CHANGE_LISTING_TO_UPCOMING_RELEASE';