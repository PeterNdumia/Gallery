import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {
    return (
        <div className=''>
            <Routes>
                <Route path="/"  element={<LandingPage/>}></Route>
    
            </Routes>
        </div>
    );
}

export default App;
