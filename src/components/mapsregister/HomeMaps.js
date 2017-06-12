import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  Text,
} from 'react-native';



import MapView from 'react-native-maps';
import {stylemap} from './stylemap';
import MarkerLocation from '../maps/MarkerLocation';
//import MarkerUbicacion from './MarkerUbicacion';
//import {DB_UBICACIONES} from './dbestaciones';



const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;





class HomeMaps extends React.Component {


keymarke=0;

   state = {
      markers: []
    };



getKilometros (lat1,lon1,lat2,lon2)
 {
          
            rad=(x)=>{return x*Math.PI/180;}
            var R = 6378.137; //Radio de la tierra en km
            var dLat = rad( lat2 - lat1 );
            var dLong = rad( lon2 - lon1 );
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c;
            return d.toFixed(3); //Retorna tres decimales
 }


computeRegion() {
    return {
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
    };

}

returnmarketlocation(lat,lng){



return {
    
    latitude:lat,longitude: lng
    };

}


  render() {

      return (
     
      );
  }

}

HomeMaps.propTypes = {
  provider: MapView.ProviderPropType,
};


export default HomeMaps;