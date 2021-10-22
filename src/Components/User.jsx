import React from 'react';
import { Redirect } from 'react-router';

const data = JSON.parse(localStorage.getItem('auth'))
const User = () => {
    if (data == null || data.accessToken.length == null) {
        return <Redirect to="/login" />;
    }
    return (
        <div className='user-page'>
            <p>{data.accessToken}</p>
            <p>{data.refreshToken}</p>
        </div>
    )
}

export default User;