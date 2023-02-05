import React from 'react';
import introPic from '../../../../src/assets/intropic.png';

function AboutSection() {
    return (
        <div className='flex flex-row justify-between items-center h-[25%]'>
            <img src={introPic} alt='home-pic'  className='object-contain w-[55%]'/>
            <p className='text-black md:text-3xl text-center w-[45%] mr-10 text-sm '>Get all your albums and <br></br> photos in one place</p>  
        </div>
    );
}

export default AboutSection;