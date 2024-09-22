import React, { useState } from 'react'

export default function Changecontent() { 
    console.log("hell1");
    let [data, setdata] = useState("i am anurag");
    const Updatedata = () => {
        setdata("i am nineteen");
        // alert("step1");

    }
    return (<div>{data}
      <button><h1 onClick={Updatedata}>Know my age</h1></button></div>
  )
}

