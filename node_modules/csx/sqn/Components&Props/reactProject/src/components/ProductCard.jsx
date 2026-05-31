import React from 'react' // React import is required for JSX in this file

// Simple card component that displays product information passed via props
function ProductCard(props){
    return(
      
      <div style={{backgroundColor: "yellow", color: "black"}}>
        {/* show product name and price using JSX expression from props */}
        <h3>{props.product.name}</h3>
        <p>price: {props.product.price}</p>
      </div>
    )
}

// export the component so it can be reused
export default ProductCard