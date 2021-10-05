import React, {useState} from "react";
import axios from 'axios';
import APIConfig from '../../ApiConfig';
import { useHistory } from 'react-router-dom';

async function registerUser(userData) {
     return axios.post(`${APIConfig.API_BASE_URL}/users/signup`, userData)
      .then(response => response.data)
}


export default function Register(props){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    let history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        await registerUser({
            firstName,
            lastName,
            email,
            password,
            gender
        });
        
        history.push("/")

      }

    
    return (
        <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <div className="row"> <label>First Name: </label>
                <input type="text" className="col-md-2" name="firstName" id="firstName" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="row"> <label>Last Name: </label>
                <input type="text" className="col-md-2" name="lastName" id="lastName" value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="row"> <label>Email: </label>
                <input type="text" className="col-md-2" name="email" id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="row"> <label>Password: </label>
                <input type="password" className="col-md-2" name="password" id="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div onChange={e => setGender(e.target.value)}>
                <input type="radio" value="MALE" name="gender"/> Male
                <input type="radio" value="FEMALE" name="gender"/> Female
            </div>
            <div className="row"> 
                <button
                type="submit"
                className="col-md-2 mt-4 btn btn-primary"
            >
                Register
            </button>
            </div>
        </form>
        </div>
    );
};
