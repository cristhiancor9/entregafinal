import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {stylemap} from './stylemap';

class PriceMarker extends React.Component {
  render() {
    const {  price, icono } = this.props;
   
    return (

       <View style={stylemap.containerPrice}>
          <View style={stylemap.bubblePrice}>
               <Image
                    resizeMode={'cover'}  
                    style={{width: 16, height: 16}}
                    source={{uri: icono}}
              />
              

                  <Text style={stylemap.dollar}>$</Text>
                  <Text style={[stylemap.amount]}>{price}</Text>
          </View>

                <View style={stylemap.arrowBorder} />
                <View style={stylemap.arrow} />
      </View>
    );
  }
}


module.exports = PriceMarker;