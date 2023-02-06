import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../../context/AppContext';

function UserItem({avUser}) {
    const {baseUrl} = useContext(AppContext);
    const [albums,setAlbums] = useState([]);
    const {setAvUserId} =useContext(AppContext);

    const getAlbums = async ()=>{
        const res = await axios.get(`${baseUrl}user/${avUser.id}/albums`);
        console.log(res);
        setAlbums(res.data);
    }; 
    useEffect(()=>{
        getAlbums();

    },[]);
    return (

        <div className="rounded-lg shadow-lg bg-white max-w-sm items-center justify-center p-4 flex flex-col">
            <div className='w-[50px] h-[50px] bg-primary items-center rounded-[25px]'>
                <p className='text-4xl text-white text-center'>{avUser.username.charAt(0)}</p>
            </div>
            <p className='text-black lg:text-xl text-lg mt-2'>{avUser.username}</p>
            <p className='text-black lg:text-lg text-md mt-2'>Has {albums.length} albums</p>
            <button onClick={()=>{
                console.log('navigate to user page');
                console.log(avUser.id);
                setAvUserId(avUser.id);
               
            }} className='px-4 rounded-md border-2 border-primary bg-white text-primary py-2 mt-5 hover:bg-primary hover:text-white'>View Albums</button>
        </div>
   
    );
}

export default UserItem;