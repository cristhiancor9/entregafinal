import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  CustomCallout
} from 'react-native';



import MapView from 'react-native-maps';

import {stylemap} from './stylemap';
import {DB_UBICACIONES} from './dbestaciones';
import PriceMarker from './PriceMarker';



const defaultProps = {
  fontSize: 13,
};

class MarkerUbicacion extends React.Component {


returnmarketlocation(lat,lng){



return {
    
    latitude:lat,longitude: lng
    };

}


  render() {

      return (

      <View>    
          {DB_UBICACIONES.results.map((marker,index) => (
            <MapView.Marker
              key={index}
              title={'ejemplo'}
              coordinate={this.returnmarketlocation(marker.geometry.location.lat,marker.geometry.location.lng)}
              pinColor={'#ffffff'}
            >
            <PriceMarker price={15000} icono={marker.icon} />
            <MapView.Callout >
              
                <Text style={{fontSize: 12}} >Dirección:</Text>
                <Text style={{fontSize: 12}} >{marker.vicinity}</Text>
                <Text style={{fontSize: 12}}  >Ultimos precios:</Text>
                <Text style={{fontSize: 12}} >Ultimo registro: SS: $22</Text>
             
            </MapView.Callout>
              
            </MapView.Marker>
          ))
               }
       </View>

      );
  }

}


MarkerUbicacion.defaultProps = defaultProps;


export default MarkerUbicacion;