import React, { Component } from 'react';
import { View , ToolbarAndroid } from 'react-native';
import { COLOR } from './config/colors';
import { MESSAGES } from './config/messages';


export const headerLeft = ()=>{
  return (
    <Icon name="menu" style={{marginLeft:10}} size={30} color="#fff" />
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

// callback que se ejecuta al presionar un boton de ToolbarAndroid
const actionBtnToolbar = (navigation, index) => {
  if(index == 0){
    navigation.navigate('Contact');
  }

  if(index == 1){
    navigation.navigate('Sync');
  }
  
}

export const headerToolbar = (navigation)=>{
  return (
    <View>
    <ToolbarAndroid
      logo={require('./assets/logosmall.png')} // logo de la app
      navIcon={require('./assets/menu24.png')} // Icono izquierdo de navegación
      //title={MESSAGES.NAMEAPP}
      titleColor={COLOR.TEXT_PRIMARY}
      //subtitle={'en linea'} // subtitulo para la barra de navegación
      subtitleColor={COLOR.TEXT_PRIMARY}
      actions={[
                {title: MESSAGES.CONTACT, icon:require('./assets/email-outline.png'), show: 'always'},
                {title: MESSAGES.SYNC, show: 'never'}
              ]}
      style={{height:54, backgroundColor: COLOR.PRIMARY_DARK }}
      onActionSelected={(index) => actionBtnToolbar(navigation, index)} />
      
      </View>
      

  )
}