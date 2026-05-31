// previous class-based version commented out; using functional component below

import React from "react" // React import required for JSX

// Header is a simple presentational component receiving props for name and age
function Header(props){
    return (
        <header>

        <h3>logo</h3>
        {/* if a function prop were provided, it could be called like below */}
        {/* <h5>{props.func()}</h5> */}
        <h6>welcome {props.nameProperty} of age {props.age}</h6>
        <ul>
            <li>Home</li>
            <li>contact</li>
            <li>About</li>
        </ul>
      </header>
    )
}

// export so it can be imported by other modules
export default Header