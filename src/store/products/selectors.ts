import {State} from "./slice";
import {RootStore} from '../store';
import {LOAD_STATUSES} from "types";

export const getAllProducts = (store: RootStore): State['list'] => store.products.list;
export const getSingleProduct = (store: RootStore): State['singleProduct'] => store.products.singleProduct;


const getLoadStatus = (store: RootStore): State["loadStatus"] =>
    store.products.loadStatus;

export const getIsLoadingProducts = (store: RootStore): boolean =>
    getLoadStatus(store) === LOAD_STATUSES.LOADING;
