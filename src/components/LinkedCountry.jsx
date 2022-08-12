import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';

// import { leke } from './IndexPage';
export default class LinkedCountry extends Component {

  
  render() {
    function Countries() {
      const location = useLocation()
      // const { from } = location.state
     return console.log('from')
    }

    Countries();
    return(
      <div>
      <p>test</p>
    </div>
    )
  }
}
