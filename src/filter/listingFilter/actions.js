import fetchMovies from '../../movies/actions';

const changeListingFilterAndFetchData = function (filterAction) {
    return (dispatch, getState) => {
        dispatch({type: filterAction});
        fetchMovies( getState().listingFilter.listingType, getState().location.selectedLocation)(dispatch);
    }
};

export default changeListingFilterAndFetchData;
export const UPDATE_TO_NOW_SHOWING = 'CHANGE_LISTING_TO_NOW_SHOWING';
export const UPDATE_TO_UPCOMING_RELEASE = 'CHANGE_LISTING_TO_UPCOMING_RELEASE';