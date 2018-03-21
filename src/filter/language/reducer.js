import { ADD_LANGUAGE, REMOVE_LANGUAGE } from '../language/actions'

const languageReducer = (state = { languages: []}, action) => {
  switch(action.type) {
    case ADD_LANGUAGE: return {...state, languages: state.languages.concat(action.language) };
    case REMOVE_LANGUAGE: return {...state, languages:  [
        ...state.languages.slice(0, state.languages.indexOf(action.language)),
        ...state.languages.slice(state.languages.indexOf(action.language)+1)
        ]};
    default: return {...state}
  }
}

export default languageReducer;