import React from 'react';
import AboutSection from './components/AboutSection';
import GettingStartedSection from './components/GettingStartedSection';

function LandingPage() {
    return (
        <div data-testid='landing-page' className='container flex flex-col'>
            <AboutSection/> 
            <GettingStartedSection/>
        </div>
    );
}

export default LandingPage;