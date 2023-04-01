import {configureStore, combineReducers} from "@reduxjs/toolkit";

import {reducer as categoriesReducer} from './categories';
import {reducer as productsReducer} from './products/slice'


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

