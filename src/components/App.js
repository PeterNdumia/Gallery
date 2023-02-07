import React, { useState } from 'react';
import '../index.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import AppContext from '../context/AppContext';
import HomePage from '../Pages/HomePage';
import UserPage from '../Pages/UserPage';

function App() {
    const [user,setUser] = useState({});
    const [isLoggedIn,setIsLoggedIn]= useState(false);
    const baseUrl = 'https://jsonplaceholder.typicode.com/';
    const [avUser, setAvUser] = useState({});
    const [album, setAlbum] = useState({});
    return (
        <div className=''>
            <AppContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn, baseUrl, avUser, setAvUser, album, setAlbum}}>
                <Routes>
                    <Route path="/"  element={<LandingPage/>}></Route>
                    <Route path="/homePage"  element={<HomePage/>}></Route>
                    <Route path="/userPage"  element={<UserPage/>}></Route>
    
                </Routes>
            </AppContext.Provider>
        </div>
    );
}

export default App;
