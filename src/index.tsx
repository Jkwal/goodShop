import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

import './styles/index.css';
import App from './App';

import {store} from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter basename='goodShop'>
            <App/>
        </BrowserRouter>
    </Provider>
);

