import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import reducer from './reducers/reducer';
import Index from "./components/index";

const store = createStore(reducer);

ReactDOM.render(
    <Index store={ store } />,
    document.getElementById('index')
);