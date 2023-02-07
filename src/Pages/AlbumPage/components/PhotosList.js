import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../../context/AppContext';
import PhotoItem from './PhotoItem';
function UsersList() {

    const {baseUrl} = useContext(AppContext);
    const [photos,setPhotos] = useState([]);
    const chosenAlbumObj = localStorage.getItem('chosenAlbum');
    console.log(chosenAlbumObj);
    const chosenAlbum = JSON.parse(chosenAlbumObj);
    console.log(chosenAlbum);
 
    

    const getPhotos = async ()=>{
        const res = await axios.get(`${baseUrl}albums/${chosenAlbum.id}/photos`);
        console.log(res);
        setPhotos(res.data);
    }; 
    useEffect(()=>{
        getPhotos();

    },[]);
    return (
        <div className='md:mt-20 mt-10 grid grid-cols-3 md:grid-cols-6 gap-4 md:px-4  px-0'>
            {photos.map((photoItem)=>{
                return (<PhotoItem key={photoItem.id}  photoItem={photoItem}/>);
            })}
        </div>
    );
}

export default UsersList;