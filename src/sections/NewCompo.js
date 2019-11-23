
  // Now export the  Map component into another component by passing the props values
 
import React, { Component } from 'react';
import Map from './Map'


  class NewCompo extends Component {
    render() {
      return(
          <Map
       google={this.props.google}
       center={{lat: 18.5204, lng: 73.8567}}
       height='300px'
       zoom={15}
      />
        )
    }
  }