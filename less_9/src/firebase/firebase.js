import firebase  from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFuo35zW3sGJmdTAIuUrFGdh2KeA2MmlM",
    authDomain: "reactlessfiebase.firebaseapp.com",
    databaseURL: "https://reactlessfiebase-default-rtdb.firebaseio.com",
    projectId: "reactlessfiebase",
    storageBucket: "reactlessfiebase.appspot.com",
    messagingSenderId: "676737733184",
    appId: "1:676737733184:web:ccc691551f042df805c5a5"
  };

  const  firebaseDB = firebase.initializeApp(firebaseConfig);
  export const db =firebaseDB.database().ref();
  export const auth = firebase.auth();
  
  