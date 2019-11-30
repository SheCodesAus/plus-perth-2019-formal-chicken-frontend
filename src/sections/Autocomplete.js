import React from "react";
import propTypes from 'prop-types';

import "../styles/autocomplete.css";

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.card = React.createRef();
    this.types = React.createRef();
    this.strictBounds = React.createRef();
  }

  initMap(card, input, types, strictBounds) {
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13
    });

    map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(card);

    var autocomplete = new window.google.maps.places.Autocomplete(input);

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo("bounds", map);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(["address_components", "geometry", "icon", "name"]);

    var infowindow = new window.google.maps.InfoWindow();
    var infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);
    var marker = new window.google.maps.Marker({
      map: map,
      anchorPoint: new window.google.maps.Point(0, -29)
    });

    autocomplete.addListener("place_changed", function() {
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17); // Why 17? Because it looks good.
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      var address = "";
      if (place.address_components) {
        address = [
          (place.address_components[0] &&
            place.address_components[0].short_name) ||
            "",
          (place.address_components[1] &&
            place.address_components[1].short_name) ||
            "",
          (place.address_components[2] &&
            place.address_components[2].short_name) ||
            ""
        ].join(" ");
      }

      infowindowContent.children["place-icon"].src = place.icon;
      infowindowContent.children["place-name"].textContent = place.name;
      infowindowContent.children["place-address"].textContent = address;
      infowindow.open(map, marker);
    });

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    function setupClickListener(id, types) {
      var radioButton = document.getElementById(id);
      radioButton.addEventListener("click", function() {
        autocomplete.setTypes(types);
      });
    }

    setupClickListener("changetype-all", []);
    setupClickListener("changetype-address", ["address"]);
    setupClickListener("changetype-establishment", ["establishment"]);
    setupClickListener("changetype-geocode", ["geocode"]);

    document
      .getElementById("use-strict-bounds")
      .addEventListener("click", function() {
        console.log("Checkbox clicked! New state=" + this.checked);
        autocomplete.setOptions({ strictBounds: this.checked });
      });
  }

  componentDidMount() {
    this.initMap(
      this.card.current,
      this.props.mapInput.current,
      this.types.current,
      this.strictBounds.current
    );
  }

  render() {
    return (
      <>
        <div style={{display: 'none'}} className="pac-card" id="pac-card" ref={this.card}>
          <div>
            <div id="title">Autocomplete search</div>
            <div id="type-selector" className="pac-controls" ref={this.types}>
              <input
                type="radio"
                name="type"
                id="changetype-all"
              />
              <label >All</label>

              <input type="radio" name="type" id="changetype-establishment" />
              <label >Establishments</label>

              <input type="radio" name="type" id="changetype-address" />
              <label>Addresses</label>

              <input type="radio" name="type" id="changetype-geocode" />
              <label>Geocodes</label>
            </div>
            <div
              id="strict-bounds-selector"
              className="pac-controls"
              ref={this.strictBounds}
            >
              <input type="checkbox" id="use-strict-bounds" value="" />
              <label>Strict Bounds</label>
            </div>
          </div>
          <div id="pac-container">
            <input
              id="pac-input"
              type="text"
              placeholder="Enter a location"
              ref={this.mapInput}
            />
          </div>
        </div>
        <div id="map"></div>
        <div id="infowindow-content">
          <img src="" width="16" height="16" id="place-icon" alt="fgh" />
          <span id="place-name" className="title"></span>
          <br />
          <span id="place-address"></span>
        </div>
      </>
    );
  }
}

Autocomplete.propTypes = {
    mapInput: propTypes.any
}

export default Autocomplete;