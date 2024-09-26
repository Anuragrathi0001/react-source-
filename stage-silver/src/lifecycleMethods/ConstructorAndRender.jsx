import React, { Component } from 'react'

export class Constructor extends Component {
    constructor() {
        super();
        console.log("constructor is called");
    }
    render() {
        console.log("render is called")

    return (
        <div>
            <h3>constructor</h3>
      </div>
    )
  }
}

export default Constructor