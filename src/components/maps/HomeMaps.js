import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';



import MapView from 'react-native-maps';
import {stylemap} from './stylemap';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;





class HomeMaps extends React.Component {




 state = {
      region: {
        latitude: this.props.latitude,
        longitude: this.props.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }
    };

    


  render() {
    
    return (
      <View style={stylemap.container}>
        <MapView
          provider={this.props.provider}
          style={stylemap.map}
          initialRegion={this.state.region}
           >
  
        </MapView>
      </View>
    );
  }
}

HomeMaps.propTypes = {
  provider: MapView.ProviderPropType,
};


export default HomeMaps;