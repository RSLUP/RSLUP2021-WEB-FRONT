import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIConfig from '../../ApiConfig';
import UserCard from '../../components/UserCard/UserCard';
import './UserStyle.css';


export default function User() {

    const [users, setUsers] = useState([]);
    const [bgColor, setBgColor] = useState('green');

    useEffect(() => {
      axios.get(`${APIConfig.API_BASE_URL}/users`).then((response) => {
        setUsers(response.data);
      });
    }, []);


    return (
        <div className="mb-5">
          {users.map((user) =>
            <UserCard key={user.id} user={user}/>
          )}
          
        <Link to="/saveuser">
          <button type="button" className="btn btn-primary mt-5 mb-5">
            Go to Save User
          </button>
        </Link>

{/* 
          <div className={bgColor == 'green' ? 'green-bg' : 'red-bg'}>
            <h6 className="mt-5">Change BG Color : </h6> 
            
          </div>
          <SwitchColor setBgColor={setBgColor}/> */}
        </div>
    )
}
