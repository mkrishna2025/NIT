import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import { Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyAYlCMRcL4ngJHVxUS0tQLW-7O2Ni40VkQ'};

class Location extends Component {
  constructor(props){
    super(props);

	this.state = {
		coords : {
			lat: 17.4474117,
			lng: 78.37623039999994
        },
        restaurants:[
            {
                lat: 17.4374117,
                lng: 78.36623039999994
            },
            {
                lat: 17.4274117,
                lng: 78.35623039999994
            },
            {
                lat: 17.4174117,
                lng: 78.34623039999994
            },
            {
                lat: 17.4774117,
                lng: 78.38623039999994
            },
            {
                lat: 17.4474117,
                lng: 78.37623039999994
            },
            {
                lat: 17.4474117,
                lng: 78.37623039999994
            }
        ]
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
       <Gmaps
          width={'800px'}
          height={'500px'}
          lat={this.state.coords.lat}
          lng={this.state.coords.lng}
          zoom={12}
          loadingMessage={'Be happy'}
          params={params}
          onMapCreated={this.onMapCreated}
       >
       {this.state.restaurants.map(item => <Marker
              lat={item.lat}
              lng={item.lng}
              draggable={false}
              onClick={this.onMarkerClick}
              name={'Test'}
              onDragEnd={this.onDragEnd}
         />)}

         
       </Gmaps>
      </div>
      </div>
    );
  }
}

export default Location;
