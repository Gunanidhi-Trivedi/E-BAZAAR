import React from 'react'
import {useState} from "react";
import Axios from "axios";
import './makepich.css'

const MakePitch = () => {

const [product,setProduct] = useState("");
const [description,setdescription] = useState("");
const [location,setLocation] = useState("");
const [quntity_in_kg,setQuntity_in_kg] = useState("0");
const [price_per_kg,setPrice_per_kg] = useState("0");
const [deadline,setDeadline] = useState("0");



const add_preorder=()=>{
  Axios.post("http://localhost:3000/preorder",{
    product:product,
    description:description,
    location:location,
    quntity_in_kg:quntity_in_kg,
    price_per_kg:price_per_kg,
    deadline:deadline
  }).then(()=>{
    alert("success")
    // relode the component
    // window.location.reload();

  })
  .catch(()=>{
    console.log("error")
    alert("please try again")
    // relode the component
    // window.location.reload();
  })
}



  return (
    <div className='pitch'>
      <h1>Pitch Your Crop</h1>
      <div className='part'>
        <label >PRODUCT</label>
        <input type="text"  onChange={(e) => setProduct(e.target.value)}/>
      </div>
      <div className='part'>
        <label >DESCRIPTION</label>
        <textarea name="textarea" placeholder='Give details of your product' id="" cols="30" rows="1"
          onChange={(e) => setdescription(e.target.value)}>
        </textarea>
      </div>
      <div className='part'>
        <label >LOCATION</label>
        <input type="text" onChange={(e) => setLocation(e.target.value)}/>
      </div>
      <div className='part'>
        <label >QUANTITY (KGS)</label>
        <input type="number" id='number' min='50' onChange={(e) => setQuntity_in_kg(e.target.value)}/>
      </div>
      <div className='part'>
        <label >PRICE (PER KG)</label>
        <input type="number" id='number' onChange={(e) => setPrice_per_kg(e.target.value)}/>
      </div>
      <div className='part'>
        <label >DEADLINE</label>
        <input type="number" id='number' onChange={(e) => setDeadline(e.target.value)}/>
      </div>
      <div className='part'>
        <button onClick={add_preorder}>pre-order</button>
      </div>
    </div>
  )
}

export default MakePitch