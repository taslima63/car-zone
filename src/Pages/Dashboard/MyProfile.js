import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>My Profile:{user.displayName}</h1>
            <p>{user.email}</p>
        </div>
    );
};

export default MyProfile;