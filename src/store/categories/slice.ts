import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {BASE_URL} from "config"
import {LOAD_STATUSES, Category} from "types";


const SLICE_NAME = "categories";

export const loadCategories = createAsyncThunk(
    `${SLICE_NAME}/loadCategories`,
    async (_, thunkAPI) => {
        try {
            const res = await axios(`${BASE_URL}/categories`);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export interface State {
    loadStatus: LOAD_STATUSES,
    list: Category[],
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
        builder.addCase(loadCategories.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
            state.isLoading = true;
        });
        builder.addCase(loadCategories.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
            state.isLoading = false;
        });
        builder.addCase(loadCategories.fulfilled, (state, {payload}) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.list = payload;
            state.isLoading = false;
        });
    },
});

export {reducer};

export const actions = {
    ...sliceActions,
    loadCategories
};