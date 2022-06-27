import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import '../css/LoginRegister.css';

const Register = () => {
  
  const REGISTERURL = "https://whispering-crag-31764.herokuapp.com/admin/register";

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
  })

  const [confirmPass, setConfirmPass] = useState('');  

  const handleOnchange = (event) => {
    const { value, name } = event.target;
    setNewUser((prev)=>{
      return{
        ...prev,
        [name]: value
      }
    });
    if(name === "confirmPass"){
      setConfirmPass(event.target.value)
    }
    console.log(confirmPass)
    console.log(newUser.password)
  }

  const handleRegister = () => {
    if(newUser.username === '' || newUser.password === ''){
      alert("Empty fields!. Please try again.");
    }else{      
      if(confirmPass === newUser.password){
        const registerUserData = async () => {
          const res = await axios.post(REGISTERURL, newUser);
          alert("Added new user!");
          setConfirmPass({});
        }
        registerUserData();
      }else{
        alert("Your passwords doesn't match");
      }
    }
  }

  return (
    <div className="Register" style={{display: 'flex', alignItems: "center", flexDirection: 'column'}}>
        <h3>Register</h3>
        <div style={{display: 'flex', flexDirection: 'column', width: '50vw', justifyContent: 'center'}}>
            <input onChange={handleOnchange} name="username" type="text" placeholder="Username" />
            <input onChange={handleOnchange} name="password" type="password" placeholder="Password" />
            <input onChange={handleOnchange} name="confirmPass" type="password" placeholder="Confirm Password" />
            <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
                <button onClick={handleRegister}>Register</button>
                <p>Or</p>
                <Link to="/admin/login"><button>Login</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Register;