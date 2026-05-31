
import React, { useState } from 'react'

function ComplexState() {

  /*
    - Used to toggle between two values (true/false)
    - Controls UI (background color)
  */

  const [isYellow, setIsYellow] = useState(true)
  const [arr, setArr] = useState([1,2,3,4,5])
  const [obj, setObj] = useState({
    username: "himanshu",
    password: 12345
  })


  /*
    changeColor()
    --------------------------------
    - Toggles boolean state
    - !isYellow → flips true ↔ false
    - Causes UI refresh and color change
  */

  function changeColor(){
    setIsYellow(!isYellow)
  }

  /*
    changeArr()
    --------------------------------
    - Adds new element (6) to array

    IMPORTANT:
    Wrong: arr.push(6)
       - Mutates original array
       - React may not detect change because of same reference

    Correct: [...arr, 6]
       - Creates NEW array 
       - React detects change and updates UI because reference changed
  */
  function changeArr(){
    setArr([...arr, 6])
  }

  /*
    changeObj() - same as arrays 
  */
  function changeObj(){
    setObj({ ...obj, password: 1234567543 })
  }

  return (
    <div>
      <div
        style={{
          height: "100px",
          width: "100px",
        // - Inline styling using JS object
        // - backgroundColor depends on state
          backgroundColor: isYellow == true ? "yellow" : "black"
        }}
        // onClick → triggers changeColor()
        onClick={changeColor}
      >
      </div>

      <p>{arr}</p>

      <button onClick={changeArr}>push</button>

      <p>{obj.username}</p>
      <p>{obj.password}</p>
      <p>{obj.address}</p>


      <button onClick={changeObj}>change</button>

    </div>
  )
}

export default ComplexState