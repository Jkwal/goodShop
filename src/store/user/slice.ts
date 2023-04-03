import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "utils";

import {CurrentUser} from "../../types/currentUser";
import {CartItem, Product} from "../../types";

const SLICE_NAME = "users";


export const createUser = createAsyncThunk(
    `${SLICE_NAME}/createUser`,
    async (payload: any, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/${SLICE_NAME}`, payload);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const loginUser = createAsyncThunk(
    `${SLICE_NAME}/loginUser`,
    async (payload: any, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, payload);
            const login = await axios(`${BASE_URL}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${res.data.access_token}`,
                },
            });
            return login.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);


export interface State {
    currentUser: CurrentUser,
    cart: CartItem[],
    isAuth: boolean,
}

const initialState: State = {
    currentUser: null as any,
    cart: [],
    isAuth: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addItemToCart: (state, {payload}) => {
            let newCart: any = [...state.cart];
            const found = state.cart.find(({id}) => id === payload.id);

            if (found) {
                newCart = newCart.map((item: any) => {
                    return item.id === payload.id
                        ? {...item, quantity: payload.quantity || item.quantity + 1}
                        : item;
                });
            } else newCart.push({...payload, quantity: 1});

            state.cart = newCart;
        },
        removeItemFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(({ id }) => id !== payload);
        },
        logOut: (state) => {
            state.currentUser = Object.assign({});
            state.isAuth = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
        });
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
            state.isAuth = true;
        });
    },

});

export const userReducer = userSlice.reducer;
export const {addItemToCart,removeItemFromCart, logOut} = userSlice.actions;

