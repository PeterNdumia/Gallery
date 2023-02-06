import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import getStartedPic from '../../../assets/gettingstartedpic.png';
import AppContext from '../../../context/AppContext';

function GettingStartedSection() {
    const navigate = useNavigate();
    const {user} = useContext(AppContext);
    return (
        <div className=' container w-full'>
            <p className='mt-3 text-black md:text-3xl mr-10  md:ml-0 ml-6 text-sm text-center underline'>Getting started</p>
            <div className='flex flex-row items-center justify-between mt-5 '>
                <div className='flex flex-col items-center justify-start w-[60%]'>
                    <p className='text-black md:text-2xl text-center  mr-10  md:ml-0 ml-6 text-sm '>Create timeless memories <br></br>by storing your best moments <br></br>in gallery.</p>
                    <button onClick={()=>{
                        {Object.keys(user).length != 0 ? navigate('homePage') : alert('Please log in first');
                        }
                       
                    }} className='px-4 rounded-md border-2 border-primary bg-white text-primary py-2 mt-10 mr-10 hover:bg-primary hover:text-white'>Continue</button>
                </div>
                <div className='md:w-[30%] w-[40%] justify-end'>
                    <img src={getStartedPic} alt='get-started' className='object-fill'/>
                </div>
            
            </div>
        </div>
    );
}

export default GettingStartedSection;