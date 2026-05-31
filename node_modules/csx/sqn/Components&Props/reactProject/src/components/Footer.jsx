import React from "react" // bring in React library for JSX support

// Footer defined as a class component to illustrate both styles of components
class Footer extends React.Component{
  // render method returns the JSX to display
  render(){
    return (
        <div style={{
            backgroundColor: "yellow",
            color: "red"
            }}>
            <h1>footer section</h1>
        </div>
    )
  }
}

// make Footer available to other parts of the app
export default Footer