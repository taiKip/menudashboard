import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBRueLp-eau05AFyomIECE8WCHEFCkmYfY",
  authDomain: "happy-meals-bbca2.firebaseapp.com",
  databaseURL: "https://happy-meals-bbca2-default-rtdb.firebaseio.com",
  projectId: "happy-meals-bbca2",
  storageBucket: "happy-meals-bbca2.appspot.com",
  messagingSenderId: "42398299315",
  appId: "1:42398299315:web:6d994881f2a338f6812cc6",
  measurementId: "G-FKX43KJCSM"
};

firebase.initializeApp(firebaseConfig)

export default firebase