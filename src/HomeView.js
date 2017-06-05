import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

import HomeMaps from './components/maps/HomeMaps';
import BgTracking from './components/location/location';


export default class HomeView extends Component{

  constructor(props) {
    super(props);
    this.state = {
        latitude: 0,
        longitude: 0
    };
  }

  

onChangeLocation(location){
  console.warn('HomeView: ',location.latitude);
  this.setState({longitude: location.longitude, latitude: location.latitude});
    console.warn('longitude: ', this.state.longitude);
}
 
	render(){

          //datalocation=getlocation()
          //.then((valor)=>alert(valor));

        //  alert(datalocation);

		return(
			<View style={{flex:1}}>
				<Text>Texto en HomeView</Text>
				 <HomeMaps latitude={this.state.latitude}  longitude={this.state.longitude} />
			  <BgTracking onChangeLocation={(location)=>{this.onChangeLocation.bind(this)(location)}} />
			</View>
		)
	}

}