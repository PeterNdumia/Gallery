import axios from 'axios';
import React, { useContext,  useEffect, useState } from 'react';
import AppContext from '../../../context/AppContext';

function PhotoCard() {

    const {baseUrl} = useContext(AppContext);
    const chosenPhotoObj = localStorage.getItem('chosenPhoto');
    console.log(chosenPhotoObj);
    const chosenPhoto = JSON.parse(chosenPhotoObj);
    console.log(chosenPhoto);
    const [photoTitle, setPhotoTitle] = useState();
   
    const getPhotoTitle = async ()=>{
        const res = await axios.get(`${baseUrl}photos/${chosenPhoto.id}`);
        console.log(res);
        setPhotoTitle(res.data.title);
    }; 
    
    const updateTitle = async ()=>{
        const res = await axios.put(`${baseUrl}photos/${chosenPhoto.id}`, {title:photoTitle});
        console.log(res);
    };
    useEffect(()=>{
        getPhotoTitle();
    },[]);

    function handle(e){
        setPhotoTitle(e.target.value);
    }

    return (

        <div className='container flex flex-col justify-center w-full'>
            <p className='text-2xl md:text-3xl text-center mt-24'>{photoTitle}</p>

            <div className='container rounded-lg shadow-lg bg-white max-w-4xl items-center justify-center p-1 flex flex-row self-center mt-12'>
                <img src={chosenPhoto.url} className='max-w-lg' />
                <div className='items-center flex flex-col ml-6 '>
                    <form className='max-w-sm' >
                        <input className='h-[50px] max-w-[200px] rounded-md border-2 border-primary px-2' type="text" value={photoTitle} onChange={(e)=> handle(e)} /> 
                    </form>
                    <button onClick={()=>{
                        console.log('edit photo title');
                        console.log(chosenPhoto.id);
                        updateTitle();
               
                    }} className='px-2 rounded-md border-2 border-primary bg-white text-primary py-1 mt-5 hover:bg-primary hover:text-white'>Update Title</button>
                </div>
            </div>

        </div>
   
    );
}

export default PhotoCard;