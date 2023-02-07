import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context/AppContext';

function UserItem({album}) {
    const {setAlbum} = useContext(AppContext);
    const navigate = useNavigate();

    return (

        <div className="rounded-lg shadow-lg bg-white max-w-sm items-center justify-center p-4 flex flex-col">
            <div className='w-[50px] h-[50px] bg-primary items-center rounded-[25px]'>
                <p className='text-4xl text-white text-center'>{album.title.charAt(0)}</p>
            </div>
            <p className='text-black lg:text-lg text-sm mt-2'>{album.title}</p>
            <button onClick={()=>{
                console.log(album.id);
                setAlbum(album);
                localStorage.setItem('chosenAlbum', JSON.stringify(album));
                navigate('/albumPage');
               
            }} className='px-4 rounded-md border-2 border-primary bg-white text-primary py-2 mt-5 hover:bg-primary hover:text-white'>View Photos</button>
        </div>
   
    );
}

export default UserItem;