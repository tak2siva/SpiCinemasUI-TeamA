import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './store';
import createHistory from 'history/createBrowserHistory'
import Header from '../header/Header'
import Home from './Home'

const browserHistory = createHistory()

const store = configureStore(browserHistory);

const Routes = () => (
  <ConnectedRouter history={browserHistory}>
    <Route component={Home} path="/" />
  </ConnectedRouter>
);

const Main = () => (
  <div>
    <Header />
    <Routes />
  </div>  
);

const App = () => (
  <Provider store={store} >
    <Main />
  </Provider>
);

export default App;
