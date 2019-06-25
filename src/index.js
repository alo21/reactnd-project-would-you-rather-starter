import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from "redux"
import reducer from "./Redux/Reducer.js";
import {Provider} from 'react-redux';

const store = createStore(reducer);

console.log(store.getState());


ReactDOM.render(
    <BrowserRouter>

        <Provider store={store}><App/></Provider>

    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
