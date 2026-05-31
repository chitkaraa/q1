// import React from 'react'
// Importing React library (needed in older React versions to use JSX)


// ---------------- CLASS COMPONENT EXAMPLE ----------------

// import React from 'react'

// Creating a class-based component
// class App extends React.Component{

//   // render() method must return JSX
//   render(){
//     return (
//       <h1>hello world</h1>
//     )
//   }

// }


// ---------------- FUNCTIONAL COMPONENT VERSION ----------------

// Functional component doing the same thing
// function App(){
//   return (
//     <h1>hello world</h1>
//   )
// }



// ---------------- REACT WITHOUT JSX (React.createElement) ----------------

// function App(){
//   return (

//     // JSX is internally converted into React.createElement()
//     React.createElement(
//       "div",
//       { style: { color: "red" } }, // Applying inline style to div
//       React.createElement(
//         "div",
//         null,
//         React.createElement(
//           "h1",
//           null,
//           "hello world"
//         )
//       )
//     )

//     /*
//     The above React.createElement code is equivalent to this JSX:

//     <div>
//       <div>
//         <h1>hello world</h1>
//       </div>
//     </div>
//     */

//   )
// }

// export default App




// ---------------- FUNCTIONAL COMPONENT EXAMPLE ----------------

// Variable storing a string
// let name = "Chitkara"

// Array containing names
// let arr = ["Himanshu", "Aryan", "Garima"]

// Boolean value used for conditional rendering
// let isLoggedIn = false


// Another way of creating list items directly as JSX elements
// let arr = [<li>Himanshu</li>, <li>Aryan</li>, <li>Garima</li>]


// Functional component
// function App(){
//   return (
//     <>
//       {/* React Fragment allows returning multiple elements
//           without adding an extra div */}

//       {/* Input field with className attribute */}
//       <input className="inputField" type="text" />

//       {/* Displaying variable inside JSX */}
//       <h1>hello {name}</h1>

//       {/* Inline styling using a JavaScript object */}
//       <p style={{ color: "red", backgroundColor: "blue" }}>
//         this is para tag
//       </p>

//       {/* Rendering list items dynamically using map() */}
//       <ul>
//         {arr.map((value) => {
//           return <li>{value}</li>
//         })}
//       </ul>

//       {/* Conditional rendering using ternary operator */}
//       {isLoggedIn == true
//         ? <button>logout</button>
//         : <button>login</button>
//       }

//       {/* Conditional text inside button */}
//       <button>
//         {isLoggedIn == true ? "Logout" : "Login"}
//       </button>

//     </>
//   )
// }

// export default App




// ---------------- ARRAY OF STUDENT OBJECTS ----------------

// Array storing multiple student records
// const students = [
//   {
//     id: 1, // Unique ID
//     name: "Rahul Sharma", // Student name
//     age: 20, // Age
//     course: "BCA", // Course enrolled
//     semester: 4, // Current semester
//     email: "rahul.sharma@example.com", // Email address

//     // Nested object storing marks
//     marks: {
//       math: 85,
//       computer: 92,
//       english: 78
//     }
//   },
//   {
//     id: 2,
//     name: "Priya Verma",
//     age: 19,
//     course: "BSc IT",
//     semester: 2,
//     email: "priya.verma@example.com",
//     marks: {
//       math: 88,
//       computer: 90,
//       english: 82
//     }
//   },
//   {
//     id: 3,
//     name: "Amit Kumar",
//     age: 21,
//     course: "BCA",
//     semester: 6,
//     email: "amit.kumar@example.com",
//     marks: {
//       math: 75,
//       computer: 89,
//       english: 80
//     }
//   },
//   {
//     id: 4,
//     name: "Sneha Patel",
//     age: 20,
//     course: "BCom",
//     semester: 3,
//     email: "sneha.patel@example.com",
//     marks: {
//       math: 70,
//       computer: 85,
//       english: 88
//     }
//   }
// ];


