import React from 'react';
import './App.css';
import { response } from '../../app';
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()

    this.state= {}
  }
  
 render() {
   return ( 
     <div className= "App">
       {
       this.state.users.map((user) => {
         return <div>{user.name}</div>
        })
      }
     </div>
   )
 }
 
 getUsers = () => {
   

  axios.get('/users').then((response) => {
    this.setState({
    users: response.data
    })
  })
 }


}


export default App;
