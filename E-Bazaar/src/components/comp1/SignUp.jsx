import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './signUp.css'

const signUp = () => {

    const [name,setName ] = useState("");
    const [mail,setMail ] = useState("");
    const [password,setPassword ] = useState("");

    const submitForm = () => {
        Axios.post("http://localhost:3000/create",{
          name:name,
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

  return (
    <div className= "container signUp"> 

        <h1>WELCOME to SIGNUP Page</h1>

        <form>
            <div className="form-Group">
                <label htmlFor="exampleInputName1">NAME</label>
                <input type="text"  onChange={(e) => setName(e.target.value)} id="exampleInputName1" placeholder='Enter Name'/>
            </div>

            <div className="form-Group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" onChange={(e) => setMail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>

            <div className="form-Group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}  id="exampleInputPassword1" placeholder="Password"/>
            </div>
           
           <div className='form-Group'>
               <button type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
           </div>
        </form>
    </div>
  );
};

export default signUp;