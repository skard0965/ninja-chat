  // Your web app's Firebase configuration
  
  import firebase from "firebase"
  
  var firebaseConfig = {
    apiKey: "AIzaSyBzJwXXdHL4dmmmg8LHtH8JXpQ5zaaF1wQ",
    authDomain: "ninja-chat-36ad6.firebaseapp.com",
    databaseURL: "https://ninja-chat-36ad6.firebaseio.com",
    projectId: "ninja-chat-36ad6",
    storageBucket: "ninja-chat-36ad6.appspot.com",
    messagingSenderId: "854665187875",
    appId: "1:854665187875:web:82739fe32f809f8fb35796",
    measurementId: "G-BV54DZHWJV"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebaseApp.firestore()
