import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import APIConfig from '../../ApiConfig';
import axios from 'axios';


export default function SaveUser() {
    const [email, setEmail] = useState('')
  
    const handleEmailChange = event => {
      setEmail(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();

        axios.post(`${APIConfig.API_BASE_URL}/posts`, {  title: email })
            .then(response => console.log('Submitted successfully'))
            .catch(error => console.log('Form submit error', error))
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="form mt-5">
            <div>
                <label>Email address</label>
                <input
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleEmailChange}
                value={email}
                />
            </div>
            <button type="submit" className="btn btn-success mt-1">
                Submit
            </button>
            </form>

            <Link to="/">
                <button type="button" className="btn btn-primary mt-5">
                    Go to Users List
                </button>
            </Link>
        </>
    )
}
