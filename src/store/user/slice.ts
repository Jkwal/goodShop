import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        cart: [],
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

});

export const userReducer = userSlice.reducer;
export const {addItemToCart} = userSlice.actions;

