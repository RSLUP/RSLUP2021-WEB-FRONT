import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import APIConfig from '../../ApiConfig';
import UserCard from '../../components/UserCard/UserCard';
import useToken from '../../Auth/useToken';
import './UserStyle.css';




export default function User(props) {

    const [users, setUsers] = useState([]);
    const [err, setErr] = useState(null);
    const { token, setToken, clearToken } = useToken();
    const tokenString = sessionStorage.getItem('token');
    const user = JSON.parse(tokenString);
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    useEffect(() => {
      axios.get(`${APIConfig.API_BASE_URL}/users`, config).then((response) => {
        setUsers(response.data);
      }).catch(err => {
        setErr(err);
      });
    }, []);

    function clearSession(){
      clearToken();
      window.location.reload(false);
    }

    return (
      
        <div className="mb-5">
          <h2>User List</h2>          
          {user.user_type == "ADMIN" ? (
            <Link to="/saveuser">
              <button type="button" className="btn btn-primary mt-2 mb-5">
                Add User
              </button>
            </Link>) : (
              <></>
          )}
          
          {err ? <p>No permission to view list</p> : users.map((user) =>
            <UserCard key={user.id} user={user}/>
          )}
        
          <button className="btn btn-primary mt-5" onClick={() => clearSession()}>
          Logout
          </button>
      
        
        </div>
    )
}
