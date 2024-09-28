
import React, { useState } from 'react'

export default function Inputvalue() {
  const [show, updateShow] = useState(false);
  const [initial, setinitial] = useState("");
  const handlechange=(event) => {
    console.log(event.target.value);
    setinitial(event.target.value);
  }
  const show1 = () => {
    updateShow(true);
    
  }
  return (
    <div>
      <h1>{ show? initial:""}</h1>
      <input placeholder='name please' onChange={handlechange}></input>
      <button onClick={show1}>show name</button>
    </div>
  )
}
