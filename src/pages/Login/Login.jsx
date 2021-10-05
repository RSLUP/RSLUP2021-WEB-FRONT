import React, {useState} from "react";
import axios from 'axios';
import APIConfig from '../../ApiConfig';
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
     return axios.post(`${APIConfig.API_BASE_URL}/users/login`, credentials)
      .then(response => response.data)
}


export default function Login({setToken}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        console.log(token)
        setToken(token);

      }

    
    return (
        <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="row"> <label>Email: </label>
                <input type="text" className="col-md-4" name="email" id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="row"><label>Password: </label>
                <input type="password" className="col-md-4" name="password" id="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="row"> 
                <button
                type="submit"
                className="col-md-4 mt-4   btn btn-primary"
            >
                Login
            </button>
            </div>
        </form>
        <Link to="/register">
            <button type="button" className="btn btn-primary mt-5">
                Register
            </button>
        </Link>
        </div>
    );
};
