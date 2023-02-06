import React, { useState } from 'react';
import '../index.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import AppContext from '../context/AppContext';
import HomePage from '../Pages/HomePage';

function App() {
    const [user,setUser] = useState({});
    const [isLoggedIn,setIsLoggedIn]= useState(false);
    const baseUrl = 'https://jsonplaceholder.typicode.com/';
    const [avUserId, setAvUserId] = useState(0);
    const {albumId, setAlbumId} = useState(0);
    return (
        <div className=''>
            <AppContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn, baseUrl,avUserId, setAvUserId, albumId, setAlbumId}}>
                <Routes>
                    <Route path="/"  element={<LandingPage/>}></Route>
                    <Route path="/homePage"  element={<HomePage/>}></Route>
    
                </Routes>
            </AppContext.Provider>
        </div>
    );
}

export default App;
