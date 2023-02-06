import React from 'react';
import getStartedPic from '../../../assets/gettingstartedpic.png';

function GettingStartedSection() {
    return (
        <div className=' container w-full'>
            <p className='mt-3 text-black md:text-3xl mr-10  md:ml-0 ml-6 text-sm text-center underline'>Why Gallery</p>
            <div className='flex flex-row items-center justify-between mt-5 '>
                <div className='flex flex-col items-center justify-start w-[60%]'>
                    <p className='text-black md:text-2xl text-center  mr-10  md:ml-0 ml-6 text-sm '>Create timeless memories <br></br>by storing your best moments <br></br>in gallery.</p>
                  
                </div>
                <div className='md:w-[30%] w-[40%] justify-end'>
                    <img src={getStartedPic} alt='get-started' className='object-fill'/>
                </div>
            
            </div>
        </div>
    );
}

export default GettingStartedSection;