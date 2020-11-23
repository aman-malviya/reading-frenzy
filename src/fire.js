import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPBL5tJ2FE3QAaMBIpSGbptBzNnLxBn-M",
  authDomain: "reading-frenzy.firebaseapp.com",
  databaseURL: "https://reading-frenzy.firebaseio.com",
  projectId: "reading-frenzy",
  storageBucket: "reading-frenzy.appspot.com",
  messagingSenderId: "1014594846714",
  appId: "1:1014594846714:web:c3f10c286ff72ec37bae43",
  measurementId: "G-BLHDHFWL58"
};
firebase.initializeApp(firebaseConfig);
export default firebase;