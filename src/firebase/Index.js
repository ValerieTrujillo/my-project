import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAvR9eH6KjjsOZO9m04iWO90k9B2CNA8Do",
    authDomain: "mypersonalproject-e2c6c.firebaseapp.com",
    databaseURL: "https://mypersonalproject-e2c6c.firebaseio.com",
    projectId: "mypersonalproject-e2c6c",
    storageBucket: "gs://mypersonalproject-e2c6c.appspot.com",
    messagingSenderId: "544641771099"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export{
    storage, firebase as default
  }