import {RootStore} from '../store';
import {State} from "./slice";
import {LOAD_STATUSES} from "../../types";

export const getAllProducts = (store: RootStore): State['list'] => store.products.list;
export const getSingleProduct = (store: RootStore): State['singleProduct'] => store.products.singleProduct;


export const getLoadStatus = (store: RootStore): State["loadStatus"] =>
    store.products.loadStatus;

export const getIsLoading = (store: RootStore): boolean =>
    getLoadStatus(store) === LOAD_STATUSES.LOADING;
