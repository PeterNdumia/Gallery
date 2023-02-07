import jwtDecode from 'jwt-decode';
import React, {useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

function NavBar() {
    const {user, setUser} = useContext(AppContext);
    const {isLoggedIn,setIsLoggedIn} = useContext(AppContext);
    console.log(user);
    const google = window.google;
    const navigate = useNavigate();

    function handleCallbackResponse(response){
        console.log('Encoded JWT ID Token' + response.credential);
        var userObj = jwtDecode(response.credential);
        console.log(userObj);
        setUser(userObj);
        localStorage.setItem('user', JSON.stringify(userObj));
        document.getElementById('loginDiv').hidden = true;
        handleLogin();
    }

    function handleLogin(){
       
        navigate('/homePage');
    }

  
    const initGoogle =  ()=>{
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setIsLoggedIn(true);
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
     
        if(!loggedInUser){
            setIsLoggedIn(false);
            google.accounts.id.initialize({
                client_id:'580709505371-74h8ub339b58082lr8qiqfu9jnpii1t9.apps.googleusercontent.com',
                callback: handleCallbackResponse
            });

            google.accounts.id.renderButton(
                document.getElementById('loginDiv'),
                {theme: 'outline', size: 'large'}
            );
        }

    };

    function handleLogOut(){
        setUser({});
        setIsLoggedIn(false);
        localStorage.clear();
        document.getElementById('loginDiv').hidden = false;
        navigate('/');
    }

    useEffect(()=>{
        initGoogle();
    },[isLoggedIn]);




    return (
        <div className='container w-full fixed shadow-sm bg-white'>
            <div className='container flex flex-row justify-between w-full h-[50px] px-3'>
                <button onClick={()=>{
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                    navigate('/');
                    
                }} className='flex justify-start text-3xl md:text-4xl text-primary mt-2 '>GALLERY</button>
                <div className='flex-row justify-end flex'>
                    <div id='loginDiv' className='self-center'>
                    </div>
                    {Object.keys(user).length != 0 &&
                        <button onClick={()=>{
                            handleLogOut();
                        }} className='px-4 hover:bg-primary bg-white hover:text-white text-black mr-3 ml-2 h-full'>Log Out</button>
                    }
                    
                </div>   
            </div>
            
        </div>
    );
}

export default NavBar;