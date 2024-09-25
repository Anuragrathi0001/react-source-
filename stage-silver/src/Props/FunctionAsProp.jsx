import React, { useState } from 'react'
import Funkprop from './Funkprop'

export default function FunctionAsProp() {
    //example1
    // const funk = () => {
    //     console.log("clicked");
        
    // }
    //example2
    const [count, setcount] = useState(0);
    const incre = () => {
        setcount(count + 1);
    }
    return (
      
      <div>
            {/* <Funkprop funk={funk} /> */}
            <Funkprop count={count } incre={incre} />
    </div>
  )
}
