    import * as firebase from 'firebase'


class Firebase{

static init(){

		firebase.initializeApp({

	     apiKey: "AIzaSyByD9ESaHfiva4bHIyGdACFSrI48SuP6bM",
	     authDomain: "geocali-13d4a.firebaseapp.com",
	     databaseURL: "https://geocali-13d4a.firebaseio.com",
	     storageBucket: "geocali-13d4a.appspot.com",

		});

        }
 
}

module.exports = Firebase

