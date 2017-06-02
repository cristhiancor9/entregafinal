import React from 'react';
import {AsyncStorage} from 'react-native';


export const onLogin = async (username, password) => {

try {
 	await AsyncStorage.setItem('ISLOGIN', '1');
} catch (error) {
 alert(error);
}


}

export const  isLogin = async()=>{

try{
   
  const valor= await AsyncStorage.getItem('ISLOGIN');
  return valor;

}catch(error){

 alert(error);

}

}