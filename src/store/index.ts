export {store} from "./store";
export type {AppDispatch} from "./store";

export {
    loadCategories, loadProductsByCategory, getIsLoadingCategories, getListProductsCategory, getAllCategories
} from './categories';
export {loadProducts, getAllProducts, loadSingleProduct, getSingleProduct, getIsLoadingProducts} from './products';
export {
    addItemToCart,
    userReducer,
    getUser,
    createUser,
    getIsAuth,
    loginUser,
    logOut,
    getCart,
    becomeAdmin,
    becomeUser,
    removeItemFromCart,
    clearCart
} from './user'
