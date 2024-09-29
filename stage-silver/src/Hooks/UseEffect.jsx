import React,{useEffect, useState} from 'react'

export default function UseEffect() {
    const [initial, setinitial] = useState(0);
    const incriment = () => {
        setinitial(initial+1)
    }
    useEffect(() => {
        console.log("hello i am mountedd!");
    },[initial])
  return (
      <div>
          <h1>Use Effect hook</h1>
          <h1>{initial}</h1>
          <button onClick={incriment}>increment</button>
    </div>
  )
}
