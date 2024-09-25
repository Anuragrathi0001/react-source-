import React from 'react'
import Data from './Data'

export default function MultiData() {
    const Bigdata = [
        {id:1,
            name: "Molecule Man",
            age: 29,
          
        },
        {id:2,
            name: "Madame Uppercut",
            age: 39,
           }
            ]
  return (
      <div>
          {Bigdata.map((val, index) => (
        <Data index={index} naam={val.name} umar={val.age} />
          ))}
         
    </div>
  )
}
