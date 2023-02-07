import React from 'react';

function IntroSection() {
    const chosenUserObj = localStorage.getItem('chosenUser');
    console.log(chosenUserObj);
    const chosenUser = JSON.parse(chosenUserObj);
    console.log(chosenUser);
    return (
        <div className='container flex items-center justify-center mt-20'>
            <p className='text-xl text-center text-black md:text-3xl'>{chosenUser.username} &apos;s Albums</p>    
        </div>
    );
}

export default IntroSection;