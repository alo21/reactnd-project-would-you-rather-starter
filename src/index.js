import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux'
import user from './Redux/User-Reducer.js';
import ratherbe from './Redux/Ratherbe-Reducer.js';


const store = createStore(combineReducers({
    ratherbe,
    user,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <BrowserRouter basename="/">
        <Provider store={store}> <App/></Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();