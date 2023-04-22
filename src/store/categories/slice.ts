import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {BASE_URL} from "utils/baseURL"
import {LOAD_STATUSES, Category, Product} from "types";


const SLICE_NAME = "categories";

export const loadCategories = createAsyncThunk(
    `${SLICE_NAME}/loadCategories`,
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/${SLICE_NAME}`);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const loadProductsByCategory = createAsyncThunk(
    `${SLICE_NAME}/loadProductsByCategory`,
    async (categoryID:string, thunkAPI) => {
        try {
            const res = await axios(`https://api.escuelajs.co/api/v1/${SLICE_NAME}/${categoryID}/products`);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export interface State {
    loadStatus: LOAD_STATUSES,
    list: Category[],
    listProducts: Product[],
}

const initialState: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    list: [],
    listProducts:[],

}

const {reducer, actions: sliceActions} = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadCategories.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;

        });
        builder.addCase(loadCategories.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;

        });
        builder.addCase(loadCategories.fulfilled, (state, {payload}) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.list = payload;

        });


        builder.addCase(loadProductsByCategory.fulfilled, (state, {payload}) => {
            state.listProducts = payload;
        });
    },
});

export {reducer};

export const actions = {
    ...sliceActions,
    loadCategories,
    loadProductsByCategory
};