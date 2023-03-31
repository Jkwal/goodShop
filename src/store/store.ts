import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

import {reducer as categoriesReducer} from './categories'


const rootReducer = combineReducers({
    categories: categoriesReducer
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
