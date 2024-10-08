import React from 'react'
export default function Reusable(p) {
  return (
      <div>
          <button onClick={p.Click}>{p.text}</button>
    </div>
  )
}
