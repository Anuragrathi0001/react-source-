import React, { useEffect, useState } from 'react'
import Data1 from './Data1';

export default function ConditionalHooks() {
    const[count, SetCount] = useState(0);
    const [bigData, setBigdat] = useState(100);
    
    useEffect(() => { console.log("I am working first time as componentDid mount and then as render") },[bigData])
    

    return (
      
        <div><h1>ConditionalHooks</h1>
            <Data1 count={count} bigData={bigData} />
            <button onClick={()=>(SetCount(count+1))}> increment ++</button>
            <button onClick={()=>(setBigdat(bigData+50))}>bigData ++</button>

        </div>
  )
}
