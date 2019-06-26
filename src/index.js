import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from "redux"
import reducer from "./Redux/Reducer.js";
import {Provider} from 'react-redux';
import user from '/Redux/Reducer.js';
import ratherbe from '/Redux/Reducer.js';

import {Redux} from 'Redux'


const store = createStore(Redux.combineReducers({
    ratherbe,
    user
}))

ReactDOM.render(
    <BrowserRouter>

        <App/>

    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
