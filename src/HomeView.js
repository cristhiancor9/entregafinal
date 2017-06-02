import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

import HomeMaps from './components/maps/HomeMaps';
import BgTracking from './components/location/location';


export default class HomeView extends Component{
 

 
	render(){

          //datalocation=getlocation()
          //.then((valor)=>alert(valor));

        //  alert(datalocation);

		return(
			<View style={{flex:1}}>
				<Text>Texto en HomeView</Text>
				 <HomeMaps latitude={0}  longitude={0} />
			<BgTracking  />
			</View>
		)
	}

}