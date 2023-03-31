import {Header} from 'components/Header'
import {Footer} from 'components/Footer'

import AppRoutes from "AppRoutes";
import {useAppDispatch} from "store";
import {useEffect} from "react";
import {loadCategories} from "./store";


function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadCategories());
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
