import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOR } from './config/colors';
import { MESSAGES } from './config/messages';
import HomeView from './HomeView';
import LoginView from './LoginView';
import RegisterView from './RegisterView';

export const app = StackNavigator({
 Home: { screen: HomeView , navigationOptions:({navigation})=>{return{title:'Harvy', header:null}}},
 RegisterView: { screen: RegisterView , navigationOptions:({navigation})=>{return{title:'Registrar'}}},
 Login: { screen: LoginView, navigationOptions:{header:null}}
 },
 {
 navigationOptions:{
    headerTintColor: COLOR.TEXT_PRIMARY, //Color del texto en la barra de titulo
    headerStyle: {backgroundColor: COLOR.PRIMARY_DARK},
    //headerLeft: headerLeft(), // Boton de navegacion izquierdo
    //headerRight: headerRight(), // Boton de navegacion derecho
    //headerTitle: MESSAGES.NAMEAPP //titulo de la barra de navegacion principal: 'null' para delegar esta funcion a las pestañas
  },
   initialRouteName:'Login',
    headerMode: 'screen'
 }
);