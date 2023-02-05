import React, { useState } from 'react';
import { Bars3Icon,ArrowRightOnRectangleIcon,XMarkIcon  } from '@heroicons/react/24/solid';

function NavBar() {
    const [miniNav, setMiniNav]=  useState(true);
    const [showMenu,setShowMenu]= useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showRegister, setShowRegister] = useState(true);
    return (
        <div className='container w-full fixed shadow-sm bg-white'>
            <div className='container flex flex-row justify-between w-full h-[50px] px-3'>
                <h2 className='flex justify-start text-3xl md:text-4xl text-primary mt-2 '>GALLERY</h2>
                <div className='flex-row justify-end hidden md:flex'>
                    <button onClick={()=>{
                        setShowModal(true);
                        setShowRegister(false);

                    }}  className='px-4 hover:bg-primary bg-white hover:text-white text-black mr-3  h-full'>Log in</button>
                    <button onClick={()=>{
                        setShowModal(true);
                        setShowRegister(true);

                    }} className=' rounded-md px-4 bg-primary text-white h-[40px] mt-2 flex-row flex items-center justify-between'>Register {<ArrowRightOnRectangleIcon className='w-5 ml-1 text-white'/>}</button>
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
                    <li onClick={()=>{
                        setShowModal(true);
                        setShowRegister(false);
                    }} className='py-2 text-black hover:text-white hover:bg-primary text-center'>Log in</li>
                    <li onClick={()=>{
                        setShowModal(true);
                        setShowRegister(true);
                    }} className='py-2 text-black hover:text-white hover:bg-primary text-center'>Register</li>
                </ul>

            </div>):(null)}

            {showModal?(
                <div className='flex absolute w-screen h-screen bg-opacity-70 bg-grey justify-center items-center'>
                    <div className='md:w-[400px] w-[300px] bg-grey bg-opacity-0 absolute shadow-lg'>
                        <div className='flex flex-row justify-between'>

                            <button onClick={()=>{
                                setShowRegister(false);
                            }} className='hover:bg-primary hover:text-white bg-grey text-xl px-4 py-2 w-[50%] text-center border-b border-primary' >Log in</button>
                            <button onClick={()=>{
                                setShowRegister(true);
                            }} className='hover:bg-primary hover:text-white bg-grey text-xl px-4 py-2 w-[50%] text-center border-b border-primary' >Register</button>
                         
                          
                        </div>
                        {showRegister?(
                            <div className='w-full items-center flex flex-col'>
                                <div className='px-2 py-6 flex flex-col'>
                                    <button onClick={()=>{
                                        setShowModal(false);
                                    }} className='bg-primary text-white px-4 rounded-md py-2'>Register using Google</button>
                                </div>
                            </div>
                        ):(
                            <div className='px-2 py-6 items-center flex flex-col'>
                                <button onClick={()=>{
                                    setShowModal(false);
                                }} className='bg-primary text-white px-4 rounded-md py-2'>Log in using Google</button>
                            </div>
                        )}

                        <button onClick={()=>{setShowModal(false);}} className='mt-4 text-sm mr-2 text-primary self-end'>close</button>
                    </div>

                   

                </div>
            ):(null)}
         
            
        </div>
    );
}

export default NavBar;