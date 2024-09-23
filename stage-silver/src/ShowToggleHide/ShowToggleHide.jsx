import React, { useState } from 'react'
import  './show.css'
export default function ShowToggleHide() {
    const [initial, setinitial] = useState(false);
    const show = () => {
        setinitial(true);
    }
    const hide= () => {
        setinitial(false);
    }
  
    return (
     
      <div>
          
            { initial?<div className='box'>this is a box</div>:null}
          <button  onClick={show}>show</button>
          <button onClick={hide}>hide</button>
            <button onClick={() => setinitial(!initial)}>toggle</button>

    </div>
  )
}
