  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCbTRsnW1f5xaylrd1volmdzgsIM2GMx7M",
    authDomain: "fir-demo-48533.firebaseapp.com",
    databaseURL: "https://fir-demo-48533.firebaseio.com",
    projectId: "fir-demo-48533",
    storageBucket: "fir-demo-48533.appspot.com",
    messagingSenderId: "205041005269",
    appId: "1:205041005269:web:5f31702d2b6d12f2cb685c",
    measurementId: "G-9DQ9Y2RNBW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   connecting to firebase
  let db = firebase.firestore();