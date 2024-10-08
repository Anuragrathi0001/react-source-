import React,{useReducer} from 'react'
const reducer = (state,action) => {
  console.log(state, action);
  switch (action.type) {
    case "increment": { return { count: state.count + 1 } }
    case "decrement": { return { count: state.count + 1 } }
    default: return state;

  }
}
export default function Newhooks() {
  const initialState = { count: 0 }
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <hr />
      <button onClick={() => dispatch({type:"decrement"})}>increment</button>

    </div>
  )
}
