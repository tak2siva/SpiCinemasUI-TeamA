import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

export const axiosInstance = Axios.create()

