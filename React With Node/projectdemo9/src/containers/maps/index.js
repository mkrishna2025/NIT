import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import './map.css';

const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};

class Location extends Component {
  constructor(props){
    super(props);

	this.state = {
		coords : {
			lat: 17.4474117,
			lng: 78.37623039999994
		}
	 }
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  onCloseClick() {
     console.log('onCloseClick');
   }

  onPlaceSelected(place) {
    console.log(place.geometry.location.lat());
    console.log(place.geometry.location.lng());
    this.setState({
     coords: {
       lat: place.geometry.location.lat(),
       lng: place.geometry.location.lng()
      }
    });
 }

 render() {
  return (
     <div className="Map">
         <div className="Maps">

         <Autocomplete
            style={{width: '95%'}}
            onPlaceSelected={this.onPlaceSelected.bind(this)}
            types={['(regions)']}
        />

       <Gmaps
          width={'800px'}
          height={'500px'}
          lat={this.state.coords.lat}
          lng={this.state.coords.lng}
          zoom={15}
          loadingMessage={'Be happy'}
          params={params}
          onMapCreated={this.onMapCreated}
       >

         <Marker
              lat={this.state.coords.lat}
              lng={this.state.coords.lng}
              draggable={false}
              onClick={this.onMarkerClick}
              name={'Current location'}
              onDragEnd={this.onDragEnd}
         />

          <Circle
            lat={this.state.coords.lat}
            lng={this.state.coords.lng}
            radius={50}
            onClick={this.onClick} />

          <InfoWindow
            lat={this.state.coords.lat}
            lng={this.state.coords.lng}
            content={'Welcome to Demo'}
            onCloseClick={this.onCloseClick} />
       </Gmaps>
      </div>
      </div>
    );
  }
}

export default Location;
