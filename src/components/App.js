import React, { useState } from 'react';
import '../index.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage';
import AppContext from '../context/AppContext';
import HomePage from '../Pages/HomePage';
import UserPage from '../Pages/UserPage';
import AlbumPage from '../Pages/AlbumPage';
import PhotoPage from '../Pages/PhotoPage';
import NavBar from './NavBar';
import Footer from './Footer';
function App() {
    const [user,setUser] = useState({});
    const [isLoggedIn,setIsLoggedIn]= useState(false);
    const baseUrl = 'https://jsonplaceholder.typicode.com/';
    const [avUser, setAvUser] = useState({});
    const [album, setAlbum] = useState({});
    const [photo, setPhoto] = useState({});
    const [isLoading,setIsLoading]= useState(false);
    return (
        <div className=''>
            <AppContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn, baseUrl, avUser, setAvUser, album, setAlbum, photo, setPhoto, isLoading, setIsLoading}}>
                <NavBar/>
                <Routes>
                    <Route path="/"  element={<LandingPage/>}></Route>
                    <Route path="/homePage"  element={<HomePage/>}></Route>
                    <Route path="/userPage"  element={<UserPage/>}></Route>
                    <Route path="/albumPage"  element={<AlbumPage/>}></Route>
                    <Route path="/photoPage"  element={<PhotoPage/>}></Route>
    
    
                </Routes>
                <Footer/>
            </AppContext.Provider>
        </div>
    );
}

export default App;
