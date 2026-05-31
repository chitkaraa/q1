
// import React from "react";

// EVENTS

// function BasicState(){
//   // This function will run when button is clicked
//   function doSomething(){
//     console.log("click event...")
//   }
//   // This function runs when mouse hovers over button
//   function doSomething1(){
//     console.log("mouseover event triggered")
//   }

//   // Used with input, checkbox, select etc.
//   // Triggered when value changes
//   function doSomething2(){
//     console.log("onChange event triggered...")
//   }
//   return(
//     <>
//       {/* 
//         NOTE:
//         In JSX:
//         ✔ camelCase (onClick)
//         ✔ pass function reference (no quotes)
//       */}
//       <button 
//         onClick={doSomething}      // correct: function reference
//         onMouseOver={doSomething1}
//       >
//         click me
//       </button>

   
//      {/* - onChange triggers when user types */}
     
//       <input 
//         type="text" 
//         onChange={doSomething2} 
//       />

 
//     {/* - onChange triggers when checked/unchecked */}
  
//       <input 
//         type="checkbox" 
//         onChange={doSomething2} 
//       />

//     </>
//   )
// }

// export default BasicState;


// ------------------------------Class Component State variable----------------------------------------------

// import React, { Component } from 'react'

// // Create Class Component
// export class BasicState extends Component {

//   // count is a state variable
//   // React tracks this value and updates UI when it changes
//   state = {
//     count: 0
//   }

//   // Arrow function used to avoid binding issues (this keyword of arrow function point toward parent and 
//     //  in regular function it points toward itself
//   incr = () => {

//     // WRONG WAY (never directly modify state)
//     // this.state.count++

//     // CORRECT WAY: use setState
//     // setState takes a function or object and updates state


//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       }
//     })

//   }

//   render() {
//     return (
//       <div>

//         {/* Display current state value */}
//         <p>{this.state.count}</p>

//         {/* 
//           Button:
//           - onClick is a JSX event 
//           - Passing function reference 
//         */}
//         <button onClick={this.incr}>
//           +
//         </button>

//       </div>
//     )
//   }
// }

// export default BasicState

// ----------------------------Functional component State variable useState-------------------------------------


// import React, { useState } from 'react'

// function BasicState() {

//   // STATE DECLARATION
//   // count → current state value
//   // setCount → function to update state
//   const [count, setCount] = useState(0)

//   function incr(){

//     /*
//        PROBLEM: Direct state update using "count"

//       Suppose count = 0

//       All below lines become:
//       setCount(1)
//       setCount(1)
//       setCount(1)

//       React Batching:
//       - React groups multiple updates
//       - All updates use SAME old value

//       Final Result:
//       count = 1 (NOT 3)
//     */
//     setCount(count + 1)
//     setCount(count + 1)
//     setCount(count + 1)


//     /*
//        CORRECT WAY 

//       Functional Update:
//       - prev always holds latest updated value

//       Flow:
//       prev = 0 → 1
//       prev = 1 → 2
//       prev = 2 → 3

//       Final Result:
//       count = 3
//     */

//      setCount(prev => prev + 1)
//      setCount(prev => prev + 1)
//      setCount(prev => prev + 1)

//   }


//   return (
//     <div>

//       {/* Display current count */}
//       <p>{count}</p>

//       {/* 
//         Button Click Flow:
//         onClick → incr() called
//         → setCount() executes
//         → state updates
//         → React re-renders UI
//         → updated count shown
//       */}
//       <button onClick={incr}>+</button>

//     </div>
//   )
// }

// export default BasicState
