import React from "react"
import ProductCard from "./ProductCard" // import child component

// static array of product objects used for rendering
const products = [
    {name: "laptop", price: 20},
    {name: "mobile", price: 10},
    {name: "earphone", price: 5},
] 

// class component illustrating mapping over data
class Main extends React.Component{
  render(){
    return (
        <div style={{
            height: "60dvh", 
            backgroundColor: "black",
            color: "white"
            }}>
            <h1>main section</h1> 

            {/* iterate over products array and render a ProductCard for each entry */}
            {products.map(value=>{
                return (
                   <ProductCard product = {value}/> 
                )
            })}

        </div>
    )
  }
}

// default export
export default Main