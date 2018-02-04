import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBakJOaUe6UEo_JRNJY_CHe5sBgVUOIymc',
  authDomain: 'zozu-project.firebaseapp.com',
  databaseURL: 'https://zozu-project.firebaseio.com',
  projectId: 'zozu-project',
  storageBucket: 'zozu-project.appspot.com',
  messagingSenderId: '238300141913',
};
firebase.initializeApp(config);

const auth = firebase.auth();

export const login = (email, password) => (
  auth.signInWithEmailAndPassword(email, password)
);

export default {
  login,
};
