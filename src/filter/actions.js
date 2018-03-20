import fetchMovies from '../movies/actions';

function doUpdateAction(filterAction, listingType) {
    return (dispatch, getState) => {
        dispatch({
            type: filterAction
        });
        fetchMovies(getState().filter.listingType)(dispatch);
    }
};

const mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        changeListingType: (filterAction) => {
            dispatch(doUpdateAction(filterAction, ownProps.listingType));
        }
    }
};

export default mapDispatchToProps;
export const UPDATE_TO_NOW_SHOWING = 'CHANGE_LISTING_TO_NOW_SHOWING';
export const UPDATE_TO_UPCOMING_RELEASE = 'CHANGE_LISTING_TO_UPCOMING_RELEASE';