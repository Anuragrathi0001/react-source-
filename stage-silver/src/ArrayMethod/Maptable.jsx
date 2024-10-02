import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Maptable() {
    const people = [
        {   id:1,
            name: "Alice",
            age: 28,
            city: "New York",
            hobbies: ["reading", "traveling", "cooking"]
        },
        { 
        id: 2,
            name: "Bob",
            age: 34,
            city: "Los Angeles",
            hobbies: ["sports", "music", "gaming"]
        },
        {id:3,
            name: "Charlie",
            age: 22,
            city: "Chicago",
            hobbies: ["photography", "writing", "hiking"]
        },
        {id:4,
            name: "Diana",
            age: 30,
            city: "Miami",
            hobbies: ["yoga", "painting", "dancing"]
        }
    ]

  return (
      <div>
          <Table>
              <thead>
                  <tr>
                      <th>s no.</th>
                      <th>Name</th>
                      <th>age</th>
                      <th>hobbies</th>
                      <th>city</th>

                  </tr>

              </thead>
              <tbody>{people.map((data) => <tr key={data.id}><td>{data.id}</td>
                  <td>{data.name}</td><td>{data.age}</td><td>{data.hobbies +""}</td><td>{data.city}</td>
              </tr>)}</tbody>
          </Table>
    </div>
  )
}
