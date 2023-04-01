import {useEffect} from "react";

import {Header} from 'components/Header'
import {Footer} from 'components/Footer'

import AppRoutes from "AppRoutes";

import {useAppDispatch} from "./hooks";
import {loadCategories, loadProducts} from "./store";



function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadCategories());
        dispatch(loadProducts());

    }, [dispatch])

    return (
        <>
            <Header/>
            <main className="container">
                <AppRoutes/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
