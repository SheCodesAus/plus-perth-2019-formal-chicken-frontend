// import Autocomplete from 'react-google-autocomplete';

// import React from 'react';

// This sample uses the Autocomplete widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

import React from 'react'

export const Autocomplete = () => {
    var placeSearch, autocomplete;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

    return (
        <div>
            

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'), {types: ['geocode']});

  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
//   autocomplete.setFields(['address_component']);

  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = '';
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }


// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle(
          {center: geolocation, radius: position.coords.accuracy});
      autocomplete.setBounds(circle.getBounds());
    });
  }
}



</div>
    )
}












// var input = document.getElementByID("autocomplete");
// var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(cities)']});
// google.maps.event.addListener(autocomplete, 'place_changed', function(){
//  var place = autocomplete.getPlace();
// })



// component Map extends Component {
//  /**
//   * When the user types an address in the search box
//   * @param place
//   */
//  onPlaceSelected = ( place ) => {
// const address = place.formatted_address,
//    addressArray =  place.address_components,
//    city = this.getCity( addressArray ),
//    area = this.getArea( addressArray ),
//    state = this.getState( addressArray ),
//    latValue = place.geometry.location.lat(),
//    lngValue = place.geometry.location.lng();
// // Set these values in the state.
//   this.setState({
//    address: ( address ) ? address : '',
//    area: ( area ) ? area : '',
//    city: ( city ) ? city : '',
//    state: ( state ) ? state : '',
//    markerPosition: {
//     lat: latValue,
//     lng: lngValue
//    },
//    mapPosition: {
//     lat: latValue,
//     lng: lngValue
//    },
//   })
//  };
// render(){
// return(
// {/* For Auto complete Search Box */}
//       <Autocomplete
//        style={{
//         width: '100%',
//         height: '40px',
//         paddingLeft: '16px',
//         marginTop: '2px',
//         marginBottom: '100px'
//        }}
//        onPlaceSelected={ this.onPlaceSelected }
//        types={['(regions)']}
//       />
// )
// }


//   var input = document.getElementByID("autocomplete");
//    var autocomplete = new google.maps.places.Autocomplete(input,{types: ['(cities)']});
//  google.maps.event.addListener(autocomplete, 'place_changed', function(){
//     var place = autocomplete.getPlace();
//  })



// import  React  from  'react'

// import GoogleAutoComplete from 'react-google-autocomplete-address-fields';

// class  Autocomplete  extends  React.Component  {
//     constructor()  {
//         super()
//         this.callbackFunc = this.callbackFunc.bind(this)

//     }

//     callbackFunc  = ( autoCompleteData ) => {
//         //You can use the address data, passed by autocomplete as you want.
//     }

//     render()  {
        
//         return  (
//         <GoogleAutoComplete
//               keyForAPI="AIzaSyBistEPnDemdUSrORR-zlfW9YV_j-II-cc"
//               fieldsByUser= {{
//                 streetAddress: "route",
//                 streetAddress2: "administrative_area_level_4",
//                 locality: "locality",
//                 cityOrState: "administrative_area_level_1",
//                 postalcode: "postal_code",
//                 country: "country"
//               }}
//               callbackFunction={this.callbackFunc}
//               />

//         )

//     }

// }

// export  default  Autocomplete


// import React from 'react';
// import { View, Image } from 'react-native';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
// const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

// const GooglePlacesInput = () => {
//   return (
//     <GooglePlacesAutocomplete
//       placeholder='Search'
//       minLength={2} // minimum length of text to search
//       autoFocus={false}
//       returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
//       listViewDisplayed='auto'    // true/false/undefined
//       fetchDetails={true}
//       renderDescription={row => row.description} // custom description render
//       onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
//         console.log(data, details);
//       }}

//       getDefaultValue={() => ''}

//       query={{
//         // available options: https://developers.google.com/places/web-service/autocomplete
//         key: 'YOUR API KEY',
//         language: 'en', // language of the results
//         types: '(cities)' // default: 'geocode'
//       }}

//       styles={{
//         textInputContainer: {
//           width: '100%'
//         },
//         description: {
//           fontWeight: 'bold'
//         },
//         predefinedPlacesDescription: {
//           color: '#1faadb'
//         }
//       }}

//       currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
//       currentLocationLabel="Current location"
//       nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
//       GoogleReverseGeocodingQuery={{
//         // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
//       }}
//       GooglePlacesSearchQuery={{
//         // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
//         rankby: 'distance',
//         types: 'food'
//       }}

//       filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
//       predefinedPlaces={[homePlace, workPlace]}

//       debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
//       renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
//       renderRightButton={() => <Text>Custom text after the input</Text>}
//     />
//   );
// }