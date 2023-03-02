import {Route, Routes} from 'react-router-dom';

import {Header} from 'components/Header'
import {Footer} from 'components/Footer'

import {MainPage} from 'pages/MainPage'
import {CategoryPage} from 'pages/CategoryPage'
import {ProductPage} from 'pages/ProductPage'
import {NotFound} from 'pages/NotFound'

function App() {
    return (
        <>
            <Header/>
            <main className="container content">
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='category/:id' element={<CategoryPage/>}/>
                    <Route path='good/:id' element={<ProductPage/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
