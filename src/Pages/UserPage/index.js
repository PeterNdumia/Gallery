import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntroSection from './components/IntroSection';
import AlbumsList from './components/AlbumsList';

function UserPage() {

    const loggedInUser =  localStorage.getItem('user');
    console.log(loggedInUser);
    const navigate = useNavigate();

    return (<>
        {loggedInUser ? (<div className='container flex flex-col w-screen'>
            <IntroSection/>
            <AlbumsList/>
            
        </div>):(
            <div className='container flex flex-col w-screen h-screen justify-center items-center'>
                <h1 className='text-4xl text-center'>You are not authorized to view this page. Please Go back to login</h1>
                <button onClick={()=>{
                    navigate('/');
                }} className='bg-primary text-white mt-4 p-4 w-[50%]'>GO BACK TO LOG IN</button>
            </div>)}
     
    </>
    );
}

export default UserPage;