import React  from 'react'

export default function Funkprop(prop) {

  return (
      <div>
          { /*example1 <button onClick={prop.funk}>increment</button> */}
          {prop.count}
          <button onClick={prop.incre}>incremnment</button>
    </div>
  )
}
