import {RootStore} from "../store";

export const getUser = (store: RootStore) => store.user.currentUser;
export const getCart = (store: RootStore) => store.user.cart;
export const getIsAuth = (store: RootStore) => store.user.isAuth;