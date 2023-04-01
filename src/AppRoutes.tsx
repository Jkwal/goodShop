import {Route, Routes} from "react-router-dom";

import {ROUTES} from "./config";

import {MainPage} from "./pages/MainPage";
import {CategoryPage} from "./pages/CategoryPage";
import {ProductPage} from "./pages/ProductPage";
import {NotFound} from "./pages/NotFound";
import {LoginPage} from "./pages/LoginPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {BasketPage} from "./pages/BasketPage";
import {GoodsPage} from "./pages/GoodsPage";


const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<MainPage/>}/>
        <Route path={ROUTES.CATEGORY} element={<CategoryPage/>}/>
        <Route path={ROUTES.PRODUCT} element={<ProductPage/>}/>
        <Route path={ROUTES.BASKET} element={<BasketPage/>}/>
        <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
        <Route path={ROUTES.REGISTRATION} element={<RegistrationPage/>}/>
        <Route path={ROUTES.GOODS} element={<GoodsPage/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
);

export default AppRoutes;