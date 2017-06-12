import React, { Component } from 'react';
import { View, Text, Button, DrawerLayoutAndroid, ListView, Image,TouchableOpacity,Modal,TouchableHighlight,TextInput,Picker } from 'react-native';
import {style} from './styles/style';
import {MENUPRIN} from './config/messages'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from './components/toolbar/Toolbar';

const navigationView =(datalist,actual) => (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
     
        <ListView
        style={style.container}
        dataSource={datalist}
        renderRow={(data) => Row (data,actual)}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={style.separator} />}
      />
    </View>
);

const Row = (props,actual) => (
  <TouchableOpacity onPress={actual.onPressMenu.bind(actual,props.ref,!actual.state.modalVisible)}>
  <View style={style.containerlist}>
  
    <Icon name={props.icon} size={30} color={props.color} style={style.photolist} />
    <Text style={style.textlist}>
      {`${props.name}`}
    </Text>
    
  </View>
  </TouchableOpacity>
);


export default class HomeView extends Component{

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
        latitude: 0,
        longitude: 0,
        dataSource: ds.cloneWithRows(MENUPRIN),
        modalVisible: false,
        opendrawer:true
    };

  
  }

  onPressMenu(menu,visible){

   this.refs['DRAWER'].closeDrawer();
  // this.setState({modalVisible: visible});
   // alert(menu);
   this.props.navigation.navigate('RegisterView', {Home: 'Home'});
  }

onChangeLocation(location){
 // console.warn('HomeView: ',location.latitude);
  this.setState({longitude: location.longitude, latitude: location.latitude});
   // console.warn('longitude: ', this.state.longitude);
}

setModalVisible(visible){


     this.setState({modalVisible: visible});
}

onPressLearnMore(){


}
 
	render(){

          //datalocation=getlocation()
          //.then((valor)=>alert(valor));

        //  alert(datalocation);

		return(
			<View style={{flex:1}}>
			<Toolbar status={this.state.opendrawer} scope={this}/>	
      

    <DrawerLayoutAndroid
      drawerWidth={300}
      ref={'DRAWER'}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      onDrawerClose={()=>this.setState({'opendrawer':true})} 
      onDrawerOpen={()=>this.setState({'opendrawer':false})}     
      renderNavigationView={() => navigationView(this.state.dataSource,this)}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>{(this.state.opendrawer)? 'true ': 'false'}</Text> 

      </View>
    </DrawerLayoutAndroid>
			</View>
		)
	}

}