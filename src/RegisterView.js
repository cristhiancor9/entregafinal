import React, { Component } from 'react';
import { View, Text, Button, DrawerLayoutAndroid, ListView, Image,TouchableOpacity,Modal,TouchableHighlight,TextInput,Picker,Dimensions,Slider } from 'react-native';
import {style} from './styles/style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {stylemap} from './components/maps/stylemap';
import MapView from 'react-native-maps';
import MarkerLocation from './components/maps/MarkerLocation';
//import {DB_UBICACIONES} from './components/maps/dbestaciones';
import PriceMarker from './components/maps/PriceMarker';

//import * as firebase from 'firebase';
//import Firebase from './components/firebase/firebase';


const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class HomeView extends Component{

  constructor(props) {
    super(props);

    this.state = {
        kilometraje: 0,
        valorgalon: 0,
        modalVisible:false,
        latitude: 3.37806798,
        longitude: -76.52843588,
        detalleEstacion: '',
        idEstacion:0,
        markers:[],
        value:0,
    };

  }

  onPressConsultarMapa(visible){
    this.setState({modalVisible: visible});

}


async funcion1(){

}

async funcion2(){


  
}


returnmarketlocation(lat,lng){



return {
    
    latitude:lat,longitude: lng
    };

}

computeRegion() {
    return {
    latitude: 3.37806798,
    longitude: -76.52843588,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
    };

}

onPressOcultarMapa(id,detalleEstacion){

this.setState({markers: [] });
this.setState({value: 0});
this.setState({modalVisible: false});
this.setState({detalleEstacion:detalleEstacion});
this.setState({idEstacion:id});


}

onPressBuscar(){
alert("buscar");
//

}

onPressGuardar(){

alert("guardar");

}

getMoviesFromApiAsync() {

let raidius=this.state.value*1000;

    return fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=3.437295,-76.514701&radius='+raidius+'&type=gas_station&keyword=gas&key=AIzaSyBvgdATF2XhYiBpjcDTMwYvgka_ilJw4d8')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.results);


          this.setState({ markers: responseJson.results });
          console.log(this.state.markers);
        //return ;
      })
      .catch((error) => {
        console.error(error);
      });
  }

	render(){

		return(
			<View style={style.container}>
         <View>
                <Text>Registrar Compra.</Text>

         <TextInput
          ref="1"
          placeholder={'Kilometraje'}
          //onChangeText={(texto) => this.setState({kilometraje:texto})}
          onChangeText = {(text)=> this.onChankilometraje(text)}
          value={this.state.kilometraje}
          returnKeyType="next"
          onSubmitEditing={() => this.refs[2].focus()}
        />

         <TextInput
          ref="1"
          placeholder={'Precio x Galon'}
          //onChangeText={(texto) => this.setState({kilometraje:texto})}
          onChangeText = {(text)=> this.onChanprecio(text)}
          value={this.state.valorgalon}
          returnKeyType="next"
          onSubmitEditing={() => this.refs[3].focus()}
         />

          <View style={stylemap.buttonStation}>
            <TouchableHighlight onPress={() => {this.onPressConsultarMapa(!this.state.modalVisible)}} style={[stylemap.bubblesearch, stylemap.button]}>
              <View style={stylemap.buttonIcon}>
                <Icon name="gas-station" size={30} color="#FFFFFF"   />
                <Text style={stylemap.textWhite}>Consultar Estación</Text>
              </View>
            </TouchableHighlight>
          </View>


            {(this.state.detalleEstacion) ?
        <View style={stylemap.buttonStation}>
        <Icon name="gas-station" size={30} color="#000000"   />
        <Text>{this.state.detalleEstacion}</Text>
        </View>
      : 
       null
      }

        <View style={stylemap.buttonStation}>
            <TouchableHighlight onPress={() => {this.onPressGuardar()}} style={[stylemap.bubbleblue, stylemap.button]}>
              <View style={stylemap.buttonIcon}>
                <Icon style={stylemap.iconhori} name="content-save-all" size={30} color="#FFFFFF"   />
                <Text style={stylemap.textWhite}>Guardar</Text>
              </View>
            </TouchableHighlight>
          </View>
          
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
         </View>

          <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
           

         </View>

          <View style={stylemap.container}>
          <MapView
          provider={this.props.provider}
          style={stylemap.map}
          region={this.computeRegion()}
          initialRegion={this.computeRegion()}
          >

             {this.state.markers && this.state.markers.map((marker,index) => (
            <MapView.Marker
              key={index}
              coordinate={this.returnmarketlocation(marker.geometry.location.lat,marker.geometry.location.lng)}
              pinColor={'#ffffff'}
              onPress={this.onPressOcultarMapa.bind(this,marker.id,marker.vicinity)}
            >
            <PriceMarker price={15000} icono={marker.icon} />
            </MapView.Marker>
          ))
               }

          </MapView>
      </View>

    <View style={stylemap.contenButon}>
      <View style={stylemap.sliderContainer}>
          <Text style={stylemap.textSlider} >
          {this.state.value && +this.state.value.toFixed(3)} Km
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})}
          maximumValue ={10}
          minimumValue ={1}
           style={stylemap.slider}
           step={1}  />
     </View>
     <View style={stylemap.buttonContainer}>
       <TouchableHighlight onPress={() => {this.getMoviesFromApiAsync()}} style={[stylemap.bubblesearch, stylemap.button]}>
        <View style={stylemap.buttonIcon}>
         <Icon name="magnify" size={30} color="#FFFFFF"   />
        <Text style={stylemap.textWhite}>Buscar</Text>
        </View>
         </TouchableHighlight>
          <TouchableHighlight onPress={() => {this.onPressOcultarMapa(!this.state.modalVisible)}} style={[stylemap.bubbleRed, stylemap.button]}>
        <View style={stylemap.buttonIcon}>
        <Icon name="close-circle" size={30} color="#FFFFFF"   />
        <Text style={stylemap.textWhite}>Salir</Text>
        </View>
        </TouchableHighlight>
      </View>
    </View>
         </Modal>
			</View>
		)
	}

}