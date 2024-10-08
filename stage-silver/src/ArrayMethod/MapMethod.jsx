import React, { useLayoutEffect } from 'react'

export default function MapMethod() {
    // examle1
    // const fruits = ["apple", "banana", "guava", "pineapple", "strawberry"]
    // example2 /
    const addrez = [
        {
            id: 1,
            name:" anurag",
            phone: 9719472211,
            gender:"male",

        },
        {
            id: 2,
            name: "vidushi",
            phone: 9719472211,
            gender: "female",

        },
        {
            id: 3,
            name: "kittu",
            phone: 9719472211,
            gender: "male",

        }
    ] 
    
    
    
  return (
      <div>
          {addrez.map((data,index) => <ol key={index} type='number'>
              <li > { index} : name:{data.name}</li>
              <li> phone:{data.phone }</li>
          </ol>)}
      </div>
  )
}
