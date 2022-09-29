import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Community from './pages/Community';
import Footer from './components/Footer';
import './css/Main.scss';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/' element={<About/>}/>
                <Route path='' element={<Shop/>}/>
                <Route path='' element={<Community/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App