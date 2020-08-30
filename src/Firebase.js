import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBVcO3zjpJFf7SB3B2m8GYnj8cCnnSqZ1o",
    authDomain: "facebook-messenger-app-fad2c.firebaseapp.com",
    databaseURL: "https://facebook-messenger-app-fad2c.firebaseio.com",
    projectId: "facebook-messenger-app-fad2c",
    storageBucket: "facebook-messenger-app-fad2c.appspot.com",
    messagingSenderId: "585985292598",
    appId: "1:585985292598:web:37a061142710fc6da2db97",
    measurementId: "G-FLR35VWN44"
  });

  const db = firebaseApp.firestore();

  export default db;