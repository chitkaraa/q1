import React from "react" // React must be in scope when using JSX
import Header from "./components/Header" // layout header component
import Main from "./components/Main"     // main content component
import Footer from "./components/Footer" // page footer component
import StatusBadge from "./components/StatusBadge" // reusable status indicator

// sample data passed as props to Header
const name = "Chitkara"
const age = 20

// example helper function (unused) that could be passed as a prop
// function abc(){
//   return "himanshu"
// }

// top-level App component demonstrating composition of child components
class App extends React.Component{
  render(){
    return (
      <>
        {/* render multiple StatusBadge instances with different statuses */}
        <StatusBadge status="Active"/>
        <StatusBadge status="Pending"/>
        <StatusBadge status="Inactive"/>

        {/* Header receives props using variables defined above */}
        <Header 
        nameProperty = {name} 
        age = {age}
        // func = {abc} // commented out example of passing a function prop
        />
        <Main/>
        <Footer/>
      </>
    )
  }
}

export default App // make App the default export of the module