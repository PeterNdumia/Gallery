import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../../context/AppContext';
import AlbumItem from './AlbumItem';
function UsersList() {

    const {baseUrl} = useContext(AppContext);
    const [albums,setAlbums] = useState([]);
    const chosenUserObj = localStorage.getItem('chosenUser');
    console.log(chosenUserObj);
    const chosenUser = JSON.parse(chosenUserObj);
    console.log(chosenUser);
 
    

    const getAlbums = async ()=>{
        const res = await axios.get(`${baseUrl}user/${chosenUser.id}/albums`);
        console.log(res);
        setAlbums(res.data);
    }; 
    useEffect(()=>{
        getAlbums();

    },[]);
    return (
        <div className='md:mt-20 mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:px-4  px-0'>
            {albums.map((album)=>{
                return (<AlbumItem key={album.id}  album={album}/>);
            })}
        </div>
    );
}

export default UsersList;