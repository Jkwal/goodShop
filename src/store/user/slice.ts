import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {BASE_URL} from "utils";
import {loadProducts, loadSingleProduct} from "../products";

const SLICE_NAME = "users";

export const createUser = createAsyncThunk(
    `${SLICE_NAME}/createUser`,
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/${SLICE_NAME}`, payload);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);


const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        cart: [],
        isLoading: false,
    },
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
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
        })
    },

});

export const userReducer = userSlice.reducer;
export const {addItemToCart} = userSlice.actions;

