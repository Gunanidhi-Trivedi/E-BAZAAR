import React from 'react';
import {useState} from "react";
import Axios from "axios";

const Pitch = () => {
  
const [product,setProduct] = useState("");
const [description,setdescription] = useState("");
const [location,setLocation] = useState("");
const [quntity_in_kg,setQuntity_in_kg] = useState("0");
const [price_per_kg,setPrice_per_kg] = useState("0");



const add_product=()=>{
  Axios.post("http://localhost:3000/create",{
    product:product,
    description:description,
    location:location,
    quntity_in_kg:quntity_in_kg,
    price_per_kg:price_per_kg
  }).then(()=>{
  })
  .catch(()=>{
    console.log("error")
  })
}

  return (
    <div>
      <h1>Pitch</h1>
      <label >product</label>
      <input type="text" onChange={(e) => setProduct(e.target.value)}/>
      <label >description</label>
      <input type="text" onChange={(e) => setdescription(e.target.value)}/>
      <label >location</label>
      <input type="text" onChange={(e) => setLocation(e.target.value)}/>
      <label >quntity_in_kg</label>
      <input type="text" onChange={(e) => setQuntity_in_kg(e.target.value)}/>
      <label >price_per_kg</label>
      <input type="text" onChange={(e) => setPrice_per_kg(e.target.value)}/>
      <button onClick={add_product}>button</button>
    </div>
  )
}

export default Pitch
