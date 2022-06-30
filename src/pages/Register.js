import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import '../css/LoginRegister.css';
import { ThreeDots } from 'react-loader-spinner';

const Register = () => {
  
  const REGISTERURL = "https://whispering-crag-31764.herokuapp.com/admin/register";

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false);

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
	setIsLoading(true);
    if(newUser.username === '' || newUser.password === ''){
      alert("Empty fields!. Please try again.");
	  setIsLoading(false);
    }else{      
      if(confirmPass === newUser.password){
        const registerUserData = async () => {
          const res = await axios.post(REGISTERURL, newUser);
          alert("Added new user!");
          setConfirmPass({});
		  setIsLoading(false);
        }
        registerUserData();
      }else{
        alert("Your passwords doesn't match");
		setIsLoading(false);
      }
    }
  }

  return (
    <div className="Register" style={{display: 'flex', alignItems: "center", flexDirection: 'column'}}>
        <h3>Register</h3>
		<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', width: '50vw', justifyContent: 'center'}}>
			{isLoading? <ThreeDots color="#00bfff" height={100} width={100} />
			:
			(<><input onChange={handleOnchange} name="username" type="text" placeholder="Username" />
            <input onChange={handleOnchange} name="password" type="password" placeholder="Password" />
            <input onChange={handleOnchange} name="confirmPass" type="password" placeholder="Confirm Password" />
            <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
                <button onClick={handleRegister}>Register</button>
                <p>Or</p>
                <Link to="/admin/login"><button>Login</button></Link>
            </div></>)
			}
        </div>
    </div>
  )
}

export default Register;
