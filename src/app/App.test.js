import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NOW_SHOWING } from '../movies/actions';
import header from '../header/headerReducer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const initialState = {listingType: NOW_SHOWING}
describe('app/header/headerReducer', () => {
  it('should have initial state', () => {
    expect(header(initialState,{type:NOW_SHOWING})).toEqual(initialState);
  });
});