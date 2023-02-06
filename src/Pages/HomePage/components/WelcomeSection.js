import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

function WelcomeSection() {
    const {user} = useContext(AppContext);
    console.log(user.name);
    return (
        <div className='container flex items-center justify-center mt-20'>
            <p className='text-xl text-center text-black md:text-3xl'>Welcome {user.name}!</p>      
        </div>
    );
}

export default WelcomeSection;