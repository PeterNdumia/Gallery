import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BackNav from '../../../components/BackNav';
import AppContext from '../../../context/AppContext';

function WelcomeSection() {
    const {user} = useContext(AppContext);
    console.log(user.name);
    const navigate = useNavigate();
    function handleBack(){
        navigate('/');
    }
    return (
        <div className='container flex flex-row items-center justify-center mt-20 w-full px-8'>
            <BackNav handleBack={handleBack}/>
            <p className='text-xl text-center text-black md:text-3xl w-[80%]'>Welcome {user.name}!</p>      
        </div>
    );
}

export default WelcomeSection;