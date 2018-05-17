import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD0Aw1s7EBqBICFO1njgA5P2-LemLR8lW0",
    authDomain: "udemy-ninja-smoothies-cf80b.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-cf80b.firebaseio.com",
    projectId: "udemy-ninja-smoothies-cf80b",
    storageBucket: "udemy-ninja-smoothies-cf80b.appspot.com",
    messagingSenderId: "799221827817"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firestore database
export default firebaseApp.firestore();