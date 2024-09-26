// example1
// import React, { Component } from 'react'

// export class ComponentDidMount extends Component {
//     constructor() {
//         super();
// console.log("First one to execute i am constructor");

//     }
//     componentDidMount() {
//         console.log("last one to execute I am component did mount")
//     }
//   render() {
//       return (
        
//           <div>ComponentDidMount
//              {console.log("i am render ")}
//             </div>

//     )
//   }
// }

import React, { Component } from 'react'

export class ComponentDidMount extends Component {
    constructor() {
        super();
        this.state = {
            initial: 0
        }
                console.log("First one to execute i am constructor");

    }
    HandleClick = () => {
         this.setState((newstate) => ({
             initial: newstate.initial + 1
        }))
    }
    componentDidMount() {
        console.log("last one to execute i am component did mount");

    }
  render() {
      console.log("First one to execute i am render");
      return (
        <div>{this.state.initial}  <button onClick={this.HandleClick}> increment</button></div>
      
    )
  }
}

export default ComponentDidMount