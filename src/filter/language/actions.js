import fetchMovies from '../../movies/actions';
export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const REMOVE_LANGUAGE = 'REMOVE_LANGUAGE';
export const FETCH_LANGUAGE_PROGRESS = 'PROGRESS';
export const FETCH_LANGUAGE_SUCCESS = 'SUCCESS';
export const FETCH_LANGUAGE_FAILURE = 'FAILURE';

const addRemoveLanguages = (action, payload) => {
    return (dispatch, getState) => {
        dispatch({type: action, language: payload});
        fetchMovies(getState().filter.listingType, getState().filter.languages);
    }
}

export default addRemoveLanguages;

