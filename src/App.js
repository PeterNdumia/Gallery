import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
    return (
        <div className='w-[100vw] h-full'>
            <Routes>
                <Route path="/"  element={<LandingPage/>}></Route>
    
            </Routes>
        </div>
    );
}

export default App;
