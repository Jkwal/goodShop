import {RootStore} from '../store';
import {State} from "./slice";
import {LOAD_STATUSES} from "../../types";

export const getAllCategories = (state: RootStore): State['list'] => state.categories.list.slice(1,5);
export const getListProductsCategory = (state: RootStore): State['listProducts'] => state.categories.listProducts;

export const getLoadStatus = (state: RootStore): State["loadStatus"] =>
    state.categories.loadStatus;

export const getIsLoading = (state: RootStore): boolean =>
    getLoadStatus(state) === LOAD_STATUSES.LOADING;





