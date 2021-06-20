import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDTVWEX8BcuzCL5nTZtKv2TbP5BbwFC6G4",
    authDomain: "race-game-7be9b.firebaseapp.com",
    databaseURL: "https://race-game-7be9b-default-rtdb.firebaseio.com",
    projectId: "race-game-7be9b",
    storageBucket: "race-game-7be9b.appspot.com",
    messagingSenderId: "695424419528",
    appId: "1:695424419528:web:99f89f02a4248d682007fd"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.fireStore()