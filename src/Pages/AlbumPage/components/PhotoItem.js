import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../../context/AppContext';

function PhotoItem({photoItem}) {
    
    const {setPhoto} = useContext(AppContext);
    const  navigate = useNavigate();

    return (

        <div className="rounded-lg shadow-lg bg-white max-w-sm items-center justify-center p-1 flex flex-col">
            <img src={photoItem.thumbnailUrl} />
            <button onClick={()=>{
                console.log(photoItem.id);
                setPhoto(photoItem);
                localStorage.setItem('chosenPhoto', JSON.stringify(photoItem));
                navigate('/photoPage');
               
            }} className='px-2 rounded-md border-2 border-primary bg-white text-primary py-1 mt-5 hover:bg-primary hover:text-white'>View Photo</button>
        </div>
   
    );
}

export default PhotoItem;