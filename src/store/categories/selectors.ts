import {RootStore} from '../store';
import {State} from "./slice";

export const getAllCategories = (state: RootStore): State['list'] => state.categories.list.slice(0,4);





