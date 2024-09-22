import React, { Component } from 'react'

export class ClassBasedState extends Component {
    constructor() {
        super();
        this.state = { data: "i am Anurag" };
    }
    dataChange(){ this.setState({ data:"i am nineteen"}); }
  render() {
    return (
        <div><h1>{this.state.data}</h1>
            {console.log(this.state.data)}
        <button onClick={()=>this.dataChange()}>change state</button></div>
    )
  }
}

export default ClassBasedState