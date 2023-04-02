import {RootStore} from "../store";

export const getUser = (store: RootStore) => store.user.currentUser;
export const getIsAuth = (store: RootStore) => store.user.isAuth;