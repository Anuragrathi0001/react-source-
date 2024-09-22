import React, { useState } from 'react'

export default function Counter() {
    const [initial, setState] = useState(0);
    const addBag = () => {
        setState(initial + 1);  
        console.log("state changed");
     }
  return (
      <div><h1>{initial}</h1>
      <button onClick={addBag}><h1>add</h1></button></div>
  )
}
