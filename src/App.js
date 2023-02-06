import React, { useState } from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AppContext from './AppContext';

function App() {
    const [user,setUser] = useState({});
    const [isLoggedIn,setIsLoggedIn]= useState(false);
    return (
        <div className=''>
            <AppContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn}}>
                <Routes>
                    <Route path="/"  element={<LandingPage/>}></Route>
    
                </Routes>
            </AppContext.Provider>
        </div>
    );
}

export default App;
