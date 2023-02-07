import React from 'react';
import { useNavigate } from 'react-router-dom';
import UsersList from './components/UsersList';
import WelcomeSection from './components/WelcomeSection';

function HomePage() {
  
    const loggedInUser =  localStorage.getItem('user');
    const navigate = useNavigate();

    return (<>
        {loggedInUser ? (<div className='container flex flex-col w-screen'>
            <WelcomeSection/>
            <UsersList/>
            
        </div>):(
            <div className='container flex flex-col w-screen items-center'>
                <h1 className='text-4xl text-center'>You are not authorized to view this page. Please Go back to login</h1>
                <button onClick={()=>{
                    navigate('/');
                }} className='bg-primary text-white mt-4 p-4 w-[50%]'>GO BACK TO LOG IN</button>
            </div>)}
     
    </>
    );
}

export default HomePage;