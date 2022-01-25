import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"


const Login = (props) => {

    const host = process.env.REACT_APP__HOST;

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setProgress(40);

        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        props.setProgress(60);

        // eslint-disable-next-line
        const json = await response.json()

        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/", { replace: true });
            props.showAlert("SignUp Success", 'success')

        }
        else {
            props.showAlert(json.error, 'danger')

        }
        props.setProgress(100);

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-3' style={{ height: "60vh" }}>
            <h2 className='my-3'> SignUp Page</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label"><h4>Name</h4> </label>
                    <input type="name" className="form-control" value={credentials.name} onChange={onChange} id="name" name="name" aria-describedby="namelHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><h4>Email address</h4> </label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><h4>Password</h4></label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" minLength={5} required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
