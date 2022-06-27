import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../css/LoginRegister.css';

const Login = ({ setAuthenticated, authenticated, setCurrentUser }) => {

  const LOGINURL = "https://whispering-crag-31764.herokuapp.com/admin/login";
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: ''
  });


  const handleOnchange = (event) => {
    const value = event.target.value;
    setUser((prev)=>{
      return{
        ...prev,
        [event.target.name]: value
      }
    });
  }

  const handleLogin = () => {
    const login = async () =>{
      const res = await axios.post(LOGINURL, user);
      setCurrentUser(res.data);
      if(res.data.isLog !== undefined){
        setAuthenticated(res.data.isLog);
      }else{
        setAuthenticated(res.data);
        console.log(res.data)
      } 
      navigate("/");
      return res;
    }
    login();
  }

  return (
     <div className="Login" style={{display: 'flex', alignItems: "center", flexDirection: 'column'}}>
        <h3>Login</h3>
        <div style={{display: 'flex', flexDirection: 'column', width: '50vw', justifyContent: 'center'}}>
            <input onChange={handleOnchange} name="username" type="text" placeholder="Username" />
            <input onChange={handleOnchange} name="password" type="password" placeholder="Password" />
            <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
                <button onClick={handleLogin}>Login</button>
                <p>Or</p>
                <Link to="/admin/register"><button>Register</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Login;