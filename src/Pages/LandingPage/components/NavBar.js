import React, { useState } from 'react';
import { Bars3Icon,ArrowRightOnRectangleIcon,XMarkIcon  } from '@heroicons/react/24/solid';

function NavBar() {
    const [miniNav, setMiniNav]=  useState(true);
    const [showMenu,setShowMenu]= useState(false);
    return (
        <div className='container w-full shadow-sm'>
            <div className='container flex flex-row justify-between w-full h-[50px] px-3'>
                <h2 className='flex justify-start text-3xl md:text-4xl text-primary mt-2 '>GALLERY</h2>
                <div className='flex-row justify-end hidden md:flex'>
                    <button className='px-4 hover:bg-primary bg-white hover:text-white text-black mr-3  h-full'>Log in</button>
                    <button className=' rounded-md px-4 bg-primary text-white h-[40px] mt-2 flex-row flex items-center justify-between'>Register {<ArrowRightOnRectangleIcon className='w-5 ml-1 text-white'/>}</button>
                </div>
             

                <div className='md:hidden flex'>{miniNav?<Bars3Icon 
                    onClick={()=>{setMiniNav(false);
                        setShowMenu(true);}} 
                    className='md:hidden justify-end w-8 h-8 mt-2'/>:<XMarkIcon  onClick={()=>{
                    setMiniNav(true);
                    setShowMenu(false);
                }} className='md:hidden justify-end w-8 h-7 mt-2'/>}</div>
                 
                
            </div>
            {showMenu?( <div className='md:hidden flex flex-col justify-center w-full'>
                <ul>
                    <li className='py-2 text-black hover:text-white hover:bg-primary text-center'>Log in</li>
                    <li className='py-2 text-black hover:text-white hover:bg-primary text-center'>Register</li>
                </ul>

            </div>):(null)}
         
            
        </div>
    );
}

export default NavBar;