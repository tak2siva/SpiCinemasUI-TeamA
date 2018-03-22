import fetchMovies from '../../movies/actions';
import axios from 'axios';
export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const REMOVE_LANGUAGE = 'REMOVE_LANGUAGE';
export const FETCH_LANGUAGE_PROGRESS = 'PROGRESS';
export const FETCH_LANGUAGE_SUCCESS = 'SUCCESS';
export const FETCH_LANGUAGE_FAILURE = 'FAILURE';

export const addRemoveLanguages = (action, payload) => {
    return (dispatch, getState) => {
        dispatch({type: action, language: payload});
        fetchMovies(getState().filter.listingType, getState().filter.languages);
    }
}

  const fetchLanguagesInProgress = {
    type: FETCH_LANGUAGE_PROGRESS
  }
  
  const languagesDataFetched = (data) => ({
    type: FETCH_LANGUAGE_SUCCESS, 
    payload: data,
  });
  
  const languagesDataFetchFailure = {
    type: FETCH_LANGUAGE_FAILURE,
  };

export const fetchLanguage = () => {
    return async (dispatch) => {
        dispatch(fetchLanguagesInProgress);
        try {
          const languages = await axios.get('http://localhost:9090/language');
          dispatch(languagesDataFetched(languages.data));
        } catch(error) {
            console.log(error,"error----xxx")
          dispatch(languagesDataFetchFailure)
        }
    }
}

export default addRemoveLanguages;