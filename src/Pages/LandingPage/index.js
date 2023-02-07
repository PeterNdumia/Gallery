import React from 'react';
import AboutSection from './components/AboutSection';
import Footer from '../../components/Footer';
import GettingStartedSection from './components/GettingStartedSection';
import NavBar from '../../components/NavBar';

function LandingPage() {
    return (
        <div data-testid='landing-page' className='container flex flex-col'>
            <NavBar/>
            <AboutSection/> 
            <GettingStartedSection/>
            <Footer/>
        </div>
    );
}

export default LandingPage;