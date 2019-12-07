import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {reducer } from "./reducers/reducer";
import { createStore } from "redux";
import './index.css';

import Dashboard from './dashboard/Dashboard';
const store= createStore(reducer);
ReactDOM.render(<Provider store={store}>
    <Dashboard />
    </Provider>, document.getElementById('root'));
