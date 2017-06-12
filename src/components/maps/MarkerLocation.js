import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';



import MapView from 'react-native-maps';

import {stylemap} from './stylemap';

class MarkerLocation extends React.Component {




  render() {

      return (
     
           <MapView.Marker
              key={1}
              title={'Tu estas Aqui!'}
              coordinate={this.props.locationactual}
              pinColor={'#A4A4A4'}
             
            >
          <View style={stylemap.marker} />
            
            </MapView.Marker>
      );
  }

}

MarkerLocation.propTypes = {
  provider: MapView.ProviderPropType,
};


export default MarkerLocation;