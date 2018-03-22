import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
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

    it("when server responds with failure", async () => {
        
        mock.onGet('http://localhost:9090/language').reply(404);
        const expectedResponse = []

        store.dispatch(fetchLanguage()).then(() => {	
			const expectedActions = store.getActions();
			expect(expectedActions.length).toBe(2);
			expect(expectedActions).toContainEqual({"type": FETCH_LANGUAGE_PROGRESS});
			expect(expectedActions).toContainEqual({"type": FETCH_LANGUAGE_FAILURE});
		});
    });
});
