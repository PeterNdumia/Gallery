import React from 'react';

function IntroSection() {
    const chosenAlbumObj = localStorage.getItem('chosenAlbum');
    console.log(chosenAlbumObj);
    const chosenAlbum = JSON.parse(chosenAlbumObj);
    console.log(chosenAlbum);
    return (
        <div className='container flex items-center justify-center mt-20'>
            <p className='text-xl text-center text-black md:text-3xl'>The {chosenAlbum.title} album!</p>    
        </div>
    );
}

export default IntroSection;