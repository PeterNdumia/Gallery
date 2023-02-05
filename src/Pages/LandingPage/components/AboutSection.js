import React from 'react';
import introPic from '../../../../src/assets/intropic.png';

function AboutSection() {
    return (
        <div className='container flex flex-row justify-between items-center md:mt-0 mt-16'>
            <img src={introPic} alt='home-pic'  className='object-contain md:w-[55%] w-[70%]'/>
            <p className='text-black md:text-3xl text-center md:w-[45%] w-[30%] mr-10  md:ml-0 ml-6 text-sm '>Get all your albums and <br></br> photos in one place</p>  
        </div>
    );
}

export default AboutSection;