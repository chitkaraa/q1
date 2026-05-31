import React, {useState} from 'react'

function TodoComplexState() {

  /*
    test is a normal variable (NOT state)

    React does NOT track this
    Changing it will NOT update UI

    Used only for static display
  */
  let test = "true"

  /*
    inputValue → stores input field data
    arr → stores list of tasks

    ✔ React tracks these
    ✔ Updating them → UI re-renders
  */

  const [inputValue, setInputValue] = useState("")
  const [arr, setArr] = useState([])


  // EVENT HANDLER: ADD TASK

  function addTask(){

    /*
      FLOW:
      Current inputValue → added to array

      SPREAD OPERATOR:
      - Copies old array
      - Adds new value at end
    */
    setArr([...arr, inputValue])

      setInputValue("") // → clears input after adding

  }

  return (
    <div>

      {/* Display normal variable */}
      <p>{test}</p>

      {/*
        
        UNCONTROLLED COMPONENT 

        Reason:
        - value attribute is commented
        - React is NOT controlling input fully

        onChange Flow:
        User types
        → event fires
        → event.target.value captured
        → setInputValue() updates state

        BUT UI input value is still controlled by DOM
      */}
      <input 
        type='text'

        // Uncomment to make CONTROLLED COMPONENT UI input as well as the value is controlled by Rect
        // value={inputValue}

        onChange={(event)=> {

          /*
            CONTROLLED FLOW (when value is used):

            User types
            → onChange triggers
            → setInputValue updates state
            → React re-renders
            → input value updated from state

            This creates SINGLE SOURCE OF TRUTH (React state)
          */

          setInputValue(event.target.value)

        }}
      />

      {/* Button to add task */}
      <button onClick={addTask}>add</button>

      <ul>
        {arr.map((value, index)=>{
          return (
            <li key={index}>

              {value}


            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default TodoComplexState
