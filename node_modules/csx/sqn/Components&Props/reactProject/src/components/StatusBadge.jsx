import React from 'react' // import React library which is needed to use JSX

// Functional component that displays a colored badge based on status prop
function StatusBadge(props) {
  return (
    <div>
      {/* h1 element styled conditionally according to props.status */}
      <h1 style={{
        // choose color: green if "Active", yellow if "Pending", red otherwise
        color: props.status == "Active" ? 
               "green" : props.status == "Pending" ? 
               "yellow" : "red"
      }} 
      >status badge component rendered</h1>
    </div>
  )
}

// export the component as default so it can be imported elsewhere
export default StatusBadge
