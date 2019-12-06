import React from 'react';
import Autocomplete from "./Autocomplete"
import {register, login} from "../api/api"

export const RegisterForm = (props) => {
    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [email, setemail] = React.useState('');
    const [firstname, setfirstname] = React.useState('');
    const [lastname, setlastname] = React.useState('');
    const [address, setaddress] = React.useState('');

    const [error, setError] = React.useState(null);

    const addressInputRef = React.useRef(null)
  
    const handleFormSubmit = async (e) => {
        e.preventDefault()

        if (!username || !password || !email || !firstname || !lastname || !address) {
            setError('You need to fill out all forms before we can create an account for you')
            return
        }

        setError(null)
        
        try {
            const user = await register(username, password, email, firstname, lastname, address)
            props.onRegister(user)
        } catch (error) {
            setError(error.detail)
        }
    }

    const handlesetusername = (e) => {
        setusername(e.target.value)
    }
    const handlesetpassword = (e) => {
        setpassword(e.target.value)
    }
    const handlesetemail = (e) => {
        setemail(e.target.value)
    }
    const handlesetfirstname = (e) => {
        setfirstname(e.target.value)
    }
    const handlesetlastname = (e) => {
        setlastname(e.target.value)
    }
    const handlesetaddress = (e) => {
        setaddress(e.target.value)
    }
        
    return(
    <>
                
        <form action="/" method="post" onSubmit={handleFormSubmit}>
            <h2>Register</h2>
            <label>
                User Name
                <input value={username} type='text' name='username' onChange={handlesetusername} required/>
            </label>
            <label>
                Firstname
                <input value={firstname} type='text' name='password' onChange={handlesetfirstname}/>
            </label>
            <label>
                Lastname
                <input value={lastname} type='text' name='password' onChange={handlesetlastname}/>
            </label> <label>
                Email
                <input value={email} type='email' name='email' onChange={handlesetemail} required/>
            </label>
            <label>
                Address
                <input value={address} type='text' id='autocomplete' name='address' onChange={handlesetaddress} ref={addressInputRef}/>                  
            </label>
            <label>
                Password
                <input value={password} type='text' name='password' onChange={handlesetpassword} required/>
            </label>
            <button type='submit'>
                Register
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
        <Autocomplete mapInput={addressInputRef}/>
        
                
    </>
    );
}
  


// import React, { Component } from 'react';
// import Map from './Map';

// import AddressSuggest from './AddressSuggest';
// import AddressInput from './AddressInput';
// import axios from 'axios';
// import Autocomplete from './Autocomplete';
//added id to address field



// class RegisterForm extends Component {

// 	render() {
// 		return(
//       <>
// 			<div style={{ margin: '100px' }}>
// 				<Map
// 					google={this.props.google}
// 					center={{lat: 18.5204, lng: 73.8567}}
// 					height='300px'
// 					zoom={15}
// 				/>
// 			</div>

//           <form action="/" method="post">
//               <h2>Register</h2>
//               <label>
//                   User Name
//                   <input type='text' name='username'/>
//               </label>
//               <label>
//                   Email
//                   <input type='text' name='email'/>
//               </label>
//               <label>
//                   Address
//                   <input type='text' class='form-control' name='address' id='search_term' placeholder='Type address...'/>
                 
//               </label>
//               <label>
//                   Password
//                   <input type='password' name='password'/>
//               </label>
//               <button type='submit'>
//                   Register
//               </button>
//           </form>
//     </>
//       )
//   }
// }

// export default RegisterForm;


// const APP_ID_HERE = 'API key 2'; //'APP_ID_HERE';
// const APP_CODE_HERE = 'AIzaSyBistEPnDemdUSrORR-zlfW9YV_j-II-cc'; //'APP_CODE_HERE';

// class RegisterForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = this.getInitialState();

//     // User has entered something in the address bar
//     this.onQuery = this.onQuery.bind(this);
//     // User has entered something in an address field
//     this.onAddressChange = this.onAddressChange.bind(this);
//     // User has clicked the check button
//     this.onCheck = this.onCheck.bind(this);
//     // User has clicked the clear button
//     this.onClear = this.onClear.bind(this);
//   }

//   onQuery(evt) {
//     const query = evt.target.value;

//     if (!query.length > 0) {
//       this.setState(this.getInitialState());
//       return;
//     }

//     const self = this;
//     axios.get('https://autocomplete.geocoder.api.here.com/6.2/suggest.json',
//       {'params': {
//         // 'app_id': APP_ID_HERE,
//         // 'app_code': APP_CODE_HERE,
//         'query': query,
//         'maxresults': 1,
//       }}).then(function (response) {
//           if (response.data.suggestions.length > 0) {
//             const id = response.data.suggestions[0].locationId;
//             const address = response.data.suggestions[0].address;
//             self.setState({
//               'address' : address,
//               'query' : query,
//               'locationId': id
//             })
//           } else {
//             const state = self.getInitialState();
//             self.setState(state);
//           }
//       });
//   }

//   getInitialState() {
//     return {
//       'address': {
//         'street': '',
//         'city': '',
//         'state': '',
//         'postalCode': '',
//         'country': ''
//       },
//       'query': '',
//       'locationId': '',
//       'isChecked': false,
//       'coords': {}
//     }
//   }

//   onClear(evt) {
//     const state = this.getInitialState();
//     this.setState(state);
//   }

//   onAddressChange(evt) {
//     const id = evt.target.id
//     const val = evt.target.value

//     let state = this.state
//     state.address[id] = val;
//     this.setState(state);
//   }

//   onCheck(evt) {
//     let params = {
//         // 'app_id': APP_ID_HERE,
//         // 'app_code': APP_CODE_HERE,
//     }

//     if (this.state.locationId.length > 0) {
//       params['locationId'] = this.state.locationId;
//     } else {
//       params['searchtext'] = this.state.address.street
//         + this.state.address.city
//         + this.state.address.state
//         + this.state.address.postalCode
//         + this.state.address.country;
//     }

//     const self = this;
//     axios.get('https://geocoder.api.here.com/6.2/geocode.json',
//       {'params': params }
//       ).then(function (response) {
//         const view = response.data.Response.View
//         if (view.length > 0 && view[0].Result.length > 0) {
//           const location = view[0].Result[0].Location;

//           self.setState({
//             'isChecked': 'true',
//             'locationId': '',
//             'query': location.Address.Label,
//             'address': {
//               'street': location.Address.HouseNumber + ' ' + location.Address.Street,
//               'city': location.Address.City,
//               'state': location.Address.State,
//               'postalCode': location.Address.PostalCode,
//               'country': location.Address.Country
//             },
//             'coords': {
//               'lat': location.DisplayPosition.Latitude,
//               'lon': location.DisplayPosition.Longitude
//             }
//           });
//         } else {
//           self.setState({
//             'isChecked': true,
//             'coords': null,
//           }
//           )
//         }

//       })
//       .catch(function (error) {
//         console.log('caught failed query');
//         self.setState({
//           'isChecked': true,
//           'coords': null,
//         });
//       });
//   }

//   alert() {
//     if (!this.state.isChecked) {
//       return;
//     }

//     if (this.state.coords === null) {
//       return (
//         <div className="alert alert-warning" role="alert">
//           <b>Invalid.</b> The address is not recognized.
//         </div>
//       );
//     } else {
//       return (
//         <div className="alert alert-success" role="alert">
//           <b>Valid Address.</b>  Location is {this.state.coords.lat}, {this.state.coords.lon}.
//         </div>
//       );
//     }
//   }

//   render() {
//     let result = this.alert();
//     return (
//         <div className="container">
//           <AddressSuggest
//             query={this.state.query}
//             onChange={this.onQuery}
//             />
//           <AddressInput
//             street={this.state.address.street}
//             city={this.state.address.city}
//             state={this.state.address.state}
//             postalCode={this.state.address.postalCode}
//             country={this.state.address.country}
//             onChange={this.onAddressChange}
//             />
//           <br/>
//           { result }
//           <button type="submit" className="btn btn-primary" onClick={this.onCheck}>Check</button>
//           <button type="submit" className="btn btn-outline-secondary" onClick={this.onClear}>Clear</button>
//         </div>
//       );
//   }
// }

// export default RegisterForm;



// import React from 'react';
// // import { addressauto } from "./addressauto";


// export function RegisterForm(props){
//     return(
//         <form action="/" method="post">
//             <h2>Register</h2>
//             <label>
//                 User Name
//                 <input type='text' name='username'/>
//             </label>
//             <label>
//                 Email
//                 <input type='text' name='email'/>
//             </label>
//             <label>
//                 Address
//                 <input type='text' name='address' id= ' 'placeholder='Type address...'/>
//             </label>
//             <label>
//                 Password
//                 <input type='password' name='password'/>
//             </label>
//             <button type='submit'>
//                 Register
//             </button>
//         </form>
//     )
// }


// import React from 'react'

// class RegisterForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = this.initialState()
//     this.handlePlaceSelect = this.handlePlaceSelect.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.autocomplete = null
//   }

//   componentDidMount() {
//     this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {})

//     this.autocomplete.addListener("place_changed", this.handlePlaceSelect)
//   }

//   initialState() {
//     return {
//       name: '',
//       street_address: '',
//       city: '',
//       state: '',
//       zip_code: '',
//       googleMapLink: ''
//     }
//   }

//   handleChange(event) {
//     this.setState({[event.target.name]: event.target.value})
//   }

//   handleSubmit(event) {
//     event.preventDefault()
//     this.props.dispatch(addRegister(this.state))
//     this.clearForm()
//   }

//   handlePlaceSelect() {
//     let addressObject = this.autocomplete.getPlace()
//     let address = addressObject.address_components
//     this.setState({
//       name: addressObject.name,
//       street_address: `${address[0].long_name} ${address[1].long_name}`,
//       city: address[4].long_name,
//       state: address[6].short_name,
//       zip_code: address[8].short_name,
//       googleMapLink: addressObject.url
//     })
//   }

//   render() {
//     return(
//       <div>
        
//         <form onSubmit={this.handleSubmit}>
//           <input id="autocomplete"
//             className="input-field"
//             ref="input"
//             type="text"/>
//             <input 
//               name={"name"}
//               value={this.state.name}
//               placeholder={"Name"}
//               onChange={this.handleChange}
//             />
//             <input 
//               name={"street_address"}
//               value={this.state.street_address}
//               placeholder={"Street Address"}
//               onChange={this.handleChange}
//             />
//             <input 
//               name={"city"}
//               value={this.state.city}
//               placeholder={"City"}
//               onChange={this.handleChange}
//             />
//             <input
//               name={"state"}
//               value={this.state.state}
//               placeholder={"State"}
//               onChange={this.handleChange}
//             />
//             <input 
//               name={"zip_code"}
//               value={this.state.zip_code}
//               placeholder={"Zipcode"}
//               onChange={this.handleChange}
//             />
//             <button onSubmit={this.handleSubmit}>Submit</button>
//         </form>
//       </div>
//     )
//   }

// }

// export default RegisterForm;
