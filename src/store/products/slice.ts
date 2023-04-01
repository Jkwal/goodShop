import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {BASE_URL} from "config"
import {LOAD_STATUSES, Category, Product} from "types";


const SLICE_NAME = "products";

export const loadProducts = createAsyncThunk(
    `${SLICE_NAME}/loadProducts`,
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/${SLICE_NAME}`);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export interface State {
    loadStatus: LOAD_STATUSES,
    list: Product[],
    isLoading: boolean,
}

const initialState: State = {
    loadStatus: LOAD_STATUSES.UNKNOWN,
    list: [],
    isLoading: false,
}

const {reducer, actions: sliceActions} = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadProducts.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
            state.isLoading = true;
        });
        builder.addCase(loadProducts.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
            state.isLoading = false;
        });
        builder.addCase(loadProducts.fulfilled, (state, {payload}) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.list = payload;
            state.isLoading = false;
        });
    },
});

export {reducer};

export const actions = {
    ...sliceActions,
    loadProducts
};