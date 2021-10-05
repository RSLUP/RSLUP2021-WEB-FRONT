import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './pages/Users/User';
import SaveUser from './pages/SaveUser/SaveUser';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import useToken from './Auth/useToken';

function App() {
  const { token, setToken } = useToken();
  const location = useLocation();
  console.log(location.pathname);

  if(location.pathname == '/register'){
    return <Register />
  }

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/users" component={User}/>
        <Route path="/saveuser" component={SaveUser} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
