import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './login.css'
import { useNavigate } from 'react-router-dom'

const login = () => {

    const navigate = useNavigate()

    const [mail,setMail] = useState("");
    const [password,setPassword] = useState("");

    const submitForm = () => {
        Axios.post("http://localhost:3000/create",{
          mail:mail,
          password:password,
        }).then(()=>{
          alert("success")
          // relode the component
          window.location.reload();
        })
        .catch(()=>{
          console.log("error")
          alert("please try again")
        })
      }

      function signUp() {
        navigate("/signUp")
      } 

  return (
    <div className= "container login"> 

        <h1>WELCOME to LOGIN Page</h1>

        <form>
            <div className="formGroup">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" onChange={(e) => setMail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <div className="formGroup">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}  id="exampleInputPassword1" placeholder="Password"/>
            </div>

            <a onClick={signUp} href="" >SIGNUP </a>
            {/* <signUpPage/> */}
           
           <div className='formGroup'>
              <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
           </div>
        </form>
    </div>
  );
};

export default login;