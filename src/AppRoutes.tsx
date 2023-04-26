import {Route, Routes} from "react-router-dom";

import {ROUTES} from "./utils";

import {MainPage} from "./pages/MainPage";
import {NotFound} from "./pages/NotFound";
import {AdminPage} from "./pages/AdminPage";
import {LoginPage} from "./pages/LoginPage";
import {BasketPage} from "./pages/BasketPage";
import {ProductPage} from "./pages/ProductPage";
import {CategoryPage} from "./pages/CategoryPage";
import {RegistrationPage} from "./pages/RegistrationPage";


const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<MainPage/>}/>
        <Route path={ROUTES.CATEGORY} element={<CategoryPage/>}/>
        <Route path={ROUTES.PRODUCT} element={<ProductPage/>}/>
        <Route path={ROUTES.BASKET} element={<BasketPage/>}/>
        <Route path={ROUTES.LOGIN} element={<LoginPage/>}/>
        <Route path={ROUTES.REGISTRATION} element={<RegistrationPage/>}/>
        <Route path={ROUTES.ADMIN} element={<AdminPage/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
);

export default AppRoutes;