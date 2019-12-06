import React from 'react';
import {useAppState} from '../app-state'
import {Link, Redirect} from 'react-router-dom';
// import {Header} from '../sections/header';
import "../pages/uploadgift.css";


import axios from 'axios';

//Nanwen I will fix this and make it function based asap, sorry!

export function Uploadgiftpage() {

  const { user } = useAppState()
  const [gift_name, setgift_name] = React.useState('')
  const [gift_description, setgift_description] = React.useState('')
  const [gift_photo, setgift_photo] = React.useState(null)

  if (!user) {
    return (
      <Redirect to={'registerlogin'} />
    )
  }

  const handleChangeName = (event) => {
    console.log(event.target.value)
    this.setState({
      gift_name: event.target.value,
    })
  };

  const handleChangeDesc = (event) => {
    console.log(event.target.value)
    this.setState({
      gift_description: event.target.value,
    })
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('gift_photo', this.state.gift_photo);
    form_data.append('gift_name', this.state.gift_name);
    form_data.append('gift_description', this.state.gift_description);
    let url = 'http://localhost:8000/api/gift/?format=api';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => console.log(err))
  };

  const handleImageChange = (event) => {
    this.setState({
      gift_photo: event.target.files[0]
    })
  };

  return (
    <>
    
    
      <div classname="myform">
      <form>
        <input
            type="text"
            name="gift_name"
            placeholder="name of gift"
            value={gift_name}
            onChange={this.handleChangeName}
          />
        <input
            type="text"
            name="gift_description"
            placeholder="brief gift description"
            value={gift_description}
            onChange={this.handleChangeDesc}
          />
          <input type="file"
              id="gift_photo"
              accept="image/png, image/jpeg"  onChange={this.handleImageChange}/>
        <button type='submit' onClick={this.handleSubmit} value='submit'>Find me a sista to gifta</button>
      </form>
        <Link to="/account"><h5>Back to my account</h5></Link>
        </div>
        <h4>
      Remember your item must not be alive, dead or undead
      </h4>
      <div className="contain1">
      </div>
    </>
  
    );

  }  


export default Uploadgiftpage
