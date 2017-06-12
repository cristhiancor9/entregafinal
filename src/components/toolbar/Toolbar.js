import React, { Component } from 'react';
import { View , ToolbarAndroid,TouchableOpacity } from 'react-native';
import { COLOR } from '../../config/colors';
import { MESSAGES } from '../../config/messages';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export const headerLeft = ()=>{
  return (
    <TouchableOpacity onPress={()=>alert("menu")}>
      <Icon name="menu" style={{marginLeft:10}} size={30} color="#fff" />
    </TouchableOpacity>
    
  )
}


export const headerRight = ()=>{
  return (
    <View style={{flexDirection: 'row'}}> 
    <Icon name="magnify" style={{marginRight:10}} size={30} color="#fff" />
    <Icon name="dots-vertical" style={{marginRight:10}} size={30} color="#fff" />
    </View>
  )
}


export default class Toolbar extends Component {

	scope = this.props.scope;

	constructor(props){
		super(props)
	}

	// callback que se ejecuta al presionar un boton de ToolbarAndroid
	actionBtnToolbar = (navigation, index) => {
	  if(index == 0){
	    navigation.navigate('Contact');
	  }

	  if(index == 1){
	    navigation.navigate('Sync');
	  }
	  
	}

	_onIconClicked = (scope, opendrawer) => { 
    	
    	if(opendrawer){
    		scope.refs['DRAWER'].openDrawer();
    	}else{
    		scope.refs['DRAWER'].closeDrawer();
    	}
    	
    	// sidebarRef is the rendering component we're passing
	}


	render(){

		navigation = this.props.navigation;		

		return(
			<View>
			    <ToolbarAndroid
			      logo={require('../../assets/logosmall.png')} // logo de la app
			      navIcon={require('../../assets/menu24.png')} // Icono izquierdo de navegación
			      //title={MESSAGES.NAMEAPP}
			      onIconClicked={this._onIconClicked.bind(this, this.scope, this.props.status)}
			      titleColor={COLOR.TEXT_PRIMARY}
			      //subtitle={'en linea'} // subtitulo para la barra de navegación
			      subtitleColor={COLOR.TEXT_PRIMARY}			      
			      actions={[
			                //{title: MESSAGES.CONTACT, icon:require('./assets/email-outline.png'), show: 'always'},
			                {title: MESSAGES.SYNC, show: 'never'}
			              ]}
			      style={{height:54, backgroundColor: COLOR.PRIMARY_DARK }}
			      onActionSelected={(index) => this.actionBtnToolbar(navigation, index)} 
			      />      
		      </View>

		)

	}


}