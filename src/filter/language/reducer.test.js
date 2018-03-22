import { ADD_LANGUAGE, REMOVE_LANGUAGE, FETCH_LANGUAGE_FAILURE, FETCH_LANGUAGE_PROGRESS, FETCH_LANGUAGE_SUCCESS } from '../language/actions';
import languageReducer from './reducer';

const initialState = { languages: [], fetching: false}
const stateOnAddEnglishLanguage = {languages:['en'], fetching: false}
const stateOnAddFrenchLanguage = {languages:['en','fr'], fetching: false}
const stateOnRemoveEnglishLanguage = {languages:['fr'], fetching: false}

describe('filter/language/reducer', () => {
  it('should update language array on ticking english checkbox', () => {
    expect(languageReducer(initialState,{type:ADD_LANGUAGE,language:'en'})).toEqual(stateOnAddEnglishLanguage);
  });

  it('should update language array on ticking french checkbox', () => {
    expect(languageReducer(stateOnAddEnglishLanguage,{type:ADD_LANGUAGE,language:'fr'})).toEqual(stateOnAddFrenchLanguage);
  });

  it('should update language array on unticking english checkbox', () => {
    expect(languageReducer(stateOnRemoveEnglishLanguage,{type:REMOVE_LANGUAGE,language:'en'})).toEqual(stateOnRemoveEnglishLanguage);
  });

  it('should test for fetching variable as true in case of progress', () => {
    let assertOn = { languages: [], fetching: true};
    expect(languageReducer(initialState,{type:FETCH_LANGUAGE_PROGRESS})).toEqual(assertOn);
  });

  it('should test for change languages attribute w.r.t to payload', () => {
    let assertOn = { languages: ['EN'], fetching: false};
    expect(languageReducer(initialState,{type:FETCH_LANGUAGE_SUCCESS, payload: ['EN']})).toEqual(assertOn);
  });

  it('should Test for error flag value to be true', () => {
    let assertOn = { languages: [], fetching: false, error: true};
    expect(languageReducer(initialState,{type:FETCH_LANGUAGE_FAILURE})).toEqual(assertOn);
  });
});


