import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackNav from '../../../components/BackNav';

function IntroSection() {
    const chosenUserObj = localStorage.getItem('chosenUser');
    console.log(chosenUserObj);
    const chosenUser = JSON.parse(chosenUserObj);
    console.log(chosenUser);
    const navigate = useNavigate();
    function handleBack(){
        navigate('/homePage');
    }
    return (
        <div className='container flex flex-row items-center justify-center mt-20 px-8'>
            <BackNav handleBack={handleBack} />
            <p className='text-xl text-center text-black md:text-3xl w-[80%]'>{chosenUser.username} &apos;s Albums</p>    
        </div>
    );
}

export default IntroSection;