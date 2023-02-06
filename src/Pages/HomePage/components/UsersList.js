import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../../context/AppContext';
import UserItem from './UserItem';

function UsersList() {

    const {baseUrl} = useContext(AppContext);
    const [avUsers, setAvUsers] = useState([]);


    const getData = async ()=>{
        const res = await axios.get(`${baseUrl}users`);
        console.log(res);
        setAvUsers(res.data);
    }; 
    useEffect(()=>{
        getData();

    },[]);
    return (
        <div className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-4'>
            {avUsers.map((avUser)=>{
                return (<UserItem key={avUser.id}  avUser={avUser}/>);
            })}
        </div>
    );
}

export default UsersList;