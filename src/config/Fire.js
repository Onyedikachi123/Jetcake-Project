import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjUBHen1fUE6fgGY_Mx6HuTo1-CuJ2NhA",
    authDomain: "jetcake-project-aa0b5.firebaseapp.com",
    databaseURL: "https://jetcake-project-aa0b5.firebaseio.com",
    projectId: "jetcake-project-aa0b5",
    storageBucket: "jetcake-project-aa0b5.appspot.com",
    messagingSenderId: "604894245559",
    appId: "1:604894245559:web:77f3a50c42cbbd8f2a9332",
    measurementId: "G-LWT7Y1C8GM"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics()

  export default fire;