import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

import { NavigationActions } from 'react-navigation'

import {onLogin,isLogin} from './actions/LoginAction';




export default class LoginView extends Component{

	

 resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})

	constructor(){

super();
//alert('hola');
this.isLogin();

	}

	login = ()=>{
 	onLogin()
 	.then(this.props.navigation.navigate('Home'));
 	}

 	 isLogin = () => {
 	isLogin()
 	.then((result) =>(result=='1') ? this.props.navigation.dispatch(this.resetAction):null );
 	}



	render(){
		return(
			<View style={{flex:1}}>
			<Text>Texto en LoginView</Text>
			<Button
			title={'Login'}
			onPress={this.login.bind(this)}
			/>
</View>
		)
	}

}