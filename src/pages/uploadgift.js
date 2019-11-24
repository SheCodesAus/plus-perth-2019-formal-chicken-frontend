import React from 'react';
import {Link} from 'react-router-dom';
// import {Header} from '../sections/header';
import axios from 'axios';

//Nanwen I will fix this and make it function based asap, sorry!

export class Uploadgiftpage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      gift_name: '',
      gift_description: '',
      gift_photo: null
      };

  
    this.handleChangeName =this.handleChangeName.bind(this);  
    this.handleChangeDesc =this.handleChangeDesc.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleChangeName = (event) => {
    console.log(event.target.value)
    this.setState({
      gift_name: event.target.value,
    })
  };

  handleChangeDesc = (event) => {
    console.log(event.target.value)
    this.setState({
      gift_description: event.target.value,
    })
  };


  handleSubmit = (event) => {
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

  handleImageChange = (event) => {
    this.setState({
      gift_photo: event.target.files[0]
    })
  };


  render() {
    const { gift_name, gift_description } = this.state;
    return (
      <div>
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
       <Link to="/account">Go back to your account</Link>
       </div>
      );
    }
  }  


export default Uploadgiftpage
