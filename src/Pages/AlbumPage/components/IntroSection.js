import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackNav from '../../../components/BackNav';

function IntroSection() {
    const chosenAlbumObj = localStorage.getItem('chosenAlbum');
    console.log(chosenAlbumObj);
    const chosenAlbum = JSON.parse(chosenAlbumObj);
    console.log(chosenAlbum);
    const navigate = useNavigate();
    function handleBack(){
        navigate('/userPage');
    }
    return (
        <div className='container flex flex-row items-center justify-center mt-20 px-8'>
            <BackNav handleBack={handleBack}/>
            <p className='text-xl text-center text-black md:text-3xl w-[80%]'>The {chosenAlbum.title} album!</p>    
        </div>
    );
}

export default IntroSection;