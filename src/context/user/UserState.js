import React, { useState } from 'react';
import userContext from './userContext';

const UserState = (props) => {

    const host = process.env.REACT_APP__HOST;
    let userInitial = []
    // eslint-disable-next-line
    const [user, setUser] = useState(userInitial)



    const getuserdata = async () => {
        // API Call 
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setUser(json)
    }






    return <div>
        <userContext.Provider value={{ user, getuserdata }}>
            {props.children}
        </userContext.Provider>
    </div>;
};

export default UserState;
