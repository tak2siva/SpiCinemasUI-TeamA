import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import addRemoveLanguages from './actions';
import { ADD_LANGUAGE, REMOVE_LANGUAGE } from './actions'

let store;
let apiData;
let mock;
beforeEach(function() {
	const middlewares = [thunk]
	const mockStore = configureMockStore(middlewares);
	store = mockStore({
		filter: {
            listingType: 'now-showing',
			languages: []
		}
	});
});

describe("add new selected languages to state", () => {
    it('should test the action type of adding the new language', () => {
        store.dispatch(addRemoveLanguages(ADD_LANGUAGE, "EN"));
        expect(store.getActions()[0]).toEqual({type: ADD_LANGUAGE, language: "EN"});
	});
});
