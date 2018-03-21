import { ADD_LANGUAGE, REMOVE_LANGUAGE, FETCH_LANGUAGE_FAILURE, FETCH_LANGUAGE_PROGRESS, FETCH_LANGUAGE_SUCCESS } from '../language/actions'

const languageReducer = (state = { languages: [], fetching: false}, action) => {
  switch(action.type) {
    case ADD_LANGUAGE: return {...state, languages: state.languages.concat(action.language) };
    case REMOVE_LANGUAGE: return {...state, languages:  [
        ...state.languages.slice(0, state.languages.indexOf(action.language)),
        ...state.languages.slice(state.languages.indexOf(action.language)+1)
        ]};
    case FETCH_LANGUAGE_PROGRESS: return {...state, fetching: true };
    case FETCH_LANGUAGE_SUCCESS: return {...state, fetching: false, languages: action.payload };
    case FETCH_LANGUAGE_FAILURE: return {...state, fetching: false, error: true }
    default: return {...state}
  }
}

export default languageReducer;