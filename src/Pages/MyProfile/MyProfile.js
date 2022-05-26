import React, { useContext, useEffect, useState } from 'react';
import { UserDataProvider } from '../../App';

const MyProfile = () => {
    const [user] = useContext(UserDataProvider)
    console.log(user);
    // const [imaUser, setIamUser] = useState({})
    // useEffect(() => {
    //     fetch(`http://localhost:5000/user/${user.email}`)
    //     .then(res => res.json())
    //     .then(data => setIamUser(data))
    // },[])
    return (
        <div>
            <h1 className='text-2xl p-4 text-center'>Profile</h1>
<p>Name: {user?.name}</p>
<p>Email: {user?.email} </p>
        </div>
    );
};

export default MyProfile;