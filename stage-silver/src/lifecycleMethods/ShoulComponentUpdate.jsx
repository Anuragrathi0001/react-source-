import React, { Component } from 'react'

export class ShoulComponentUpdate extends Component {
    constructor() {
        super();
        this.state = { count: 0 };

    }
    shouldComponentUpdate(nextprops,nexstate) {
        
        if (nexstate.count < 5) {
            return true;
        }
        return false;
    }
    
  render() {
    return (
        <div>ShoulComponentUpdate
            {this.state.count}
<button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>


        </div>
    )
  }
}

export default ShoulComponentUpdate