export { store} from "./store";
export type { AppDispatch } from "./store";

export {loadCategories,loadProductsByCategory,getIsLoadingCategories,getListProductsCategory,getAllCategories} from './categories';
export {loadProducts,getAllProducts,loadSingleProduct,getSingleProduct,getIsLoadingProducts} from './products';
