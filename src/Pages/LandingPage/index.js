import React from 'react';
import AboutSection from './components/AboutSection';
import GettingStartedSection from './components/GettingStartedSection';
import NavBar from './components/NavBar';

function LandingPage() {
    return (
        <div className='container flex flex-col w-full h-full'>
            <NavBar/>
            <AboutSection/> 
            <GettingStartedSection/>
        </div>
    );
}

export default LandingPage;