import React from 'react';
import AboutSection from './components/AboutSection';
import NavBar from './components/NavBar';

function LandingPage() {
    return (
        <div className='container flex flex-col w-full h-full'>
            <NavBar/>
            <AboutSection/> 
        </div>
    );
}

export default LandingPage;