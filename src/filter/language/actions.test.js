import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
<<<<<<< HEAD
import applyMiddleware from 'redux';
import {addRemoveLanguages, fetchLanguage} from './actions';
import axios from 'axios';
import { ADD_LANGUAGE, REMOVE_LANGUAGE, FETCH_LANGUAGE_FAILURE, FETCH_LANGUAGE_PROGRESS, FETCH_LANGUAGE_SUCCESS } from './actions';

describe("test fetch action", () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const mock = new MockAdapter(axios);
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    const mockResponse = [{"id":1,"name":"EN","description":"ENGLISH"},
	{"id":2,"name":"HN","description":"HINDI"},
	{"id":3,"name":"FR","description":"FRENCH"}];

    it("when server responds with success", async () => {
        
        mock.onGet('http://localhost:9090/language').reply(200, mockResponse);
        const expectedResponse = []

        store.dispatch(fetchLanguage()).then(() => {
			
			const expectedActions = store.getActions();
			expect(expectedActions.length).toBe(2);
			expect(expectedActions).toContainEqual({"type": FETCH_LANGUAGE_PROGRESS});
			expect(expectedActions).toContainEqual({"type": FETCH_LANGUAGE_SUCCESS, payload: mockResponse});
		});
    });
});
=======
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
>>>>>>> 933cb9b
