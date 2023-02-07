import React, { useContext } from 'react';
import AppContext from '../../../context/AppContext';

function UserItem({photo}) {
    console.log(photo);
    const {photoId,setPhotoId} = useContext(AppContext);

    return (

        <div className="rounded-lg shadow-lg bg-white max-w-sm items-center justify-center p-1 flex flex-col">
            <img src={photo.thumbnailUrl} />
            <button onClick={()=>{
                console.log('navigate to photo page');
                console.log(photo.id);
                setPhotoId(photo.id);
                localStorage.setItem('chosenPhotoId', JSON.stringify(photoId));
               
            }} className='px-2 rounded-md border-2 border-primary bg-white text-primary py-1 mt-5 hover:bg-primary hover:text-white'>View Photo</button>
        </div>
   
    );
}

export default UserItem;