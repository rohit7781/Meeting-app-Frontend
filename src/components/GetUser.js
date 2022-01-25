import React, { useContext, useEffect } from 'react';
import userContext from '../context/user/userContext';

function GetUser() {
    const context = useContext(userContext);

    const { user, getuserdata } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getuserdata()
            // eslint-disable-next-line
        }

    }, [getuserdata])

    const now = user.date


    return (
        <>
            <div className='container' style={{ height: "64vh" }}>
                <div className='mx-5'>
                    <h3>Name : {user.name} </h3>
                    <h3 className='my-3'>Email : {user.email} </h3>
                    <h3 className='my-3'>SignUp Date : {now} </h3>
                </div>
            </div>
        </>
    )
};

export default GetUser;
