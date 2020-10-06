import React from 'react';



//function componet 
function Example(props){
    return (
        <div>
        <h1 style={{color: 'blue'}}> Hello {props.name}</h1>
        <button onclick ={props.callback} Type="button">Submit</button>
        </div>
    )
      

}
//props stands for properties 
export default Example