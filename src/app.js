import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { headerToolbar } from './Toolbar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLOR } from './config/colors';
import { MESSAGES } from './config/messages';
import HomeView from './HomeView';
import LoginView from './LoginView';

export const app = StackNavigator({
 Home: { screen: HomeView , navigationOptions:({navigation})=>{return{title:'Harvy', header:headerToolbar(navigation)}}},
 Login: { screen: LoginView, navigationOptions:{header:null}}
 },
 {
   initialRouteName:'Login'
 }
);