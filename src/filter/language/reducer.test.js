
import { ADD_LANGUAGE, REMOVE_LANGUAGE } from '../language/actions';
import languageReducer from './reducer';

const initialState = {languages:[]}
const stateOnAddEnglishLanguage = {languages:['en']}
const stateOnAddFrenchLanguage = {languages:['en','fr']}
const stateOnRemoveEnglishLanguage = {languages:['fr']}

describe('filter/language/reducer', () => {
  it('should update language array on ticking english checkbox', () => {
    expect(languageReducer(initialState,{type:ADD_LANGUAGE,language:'en'})).toEqual(stateOnAddEnglishLanguage);
  });

  it('should update language array on ticking french checkbox', () => {
    expect(languageReducer(stateOnAddEnglishLanguage,{type:ADD_LANGUAGE,language:'fr'})).toEqual(stateOnAddFrenchLanguage);
  });

  it('should update language array on unticking english checkbox', () => {
    expect(languageReducer(stateOnAddFrenchLanguage,{type:REMOVE_LANGUAGE,language:'en'})).toEqual(stateOnRemoveEnglishLanguage);
  });
});