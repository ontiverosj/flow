import React from "react"

class Stateful extends React.Component {
 constructor(props){
     this.state ={
         name: props.name
     }
 }
 render() {
     return (
         <div>
         <h3></h3>
         </div>
     )
 }
 
 reverseName() {
     const reverse = this.state.name.split('',).reverse.join('')

     this.setState({
        name: reverse
      } )
 }
}

export default Stateful 