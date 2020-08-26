import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAL1oQPIR3tXA1zGtDSkhVwt_1mTahiHco",
  authDomain: "todo-react-app-3bd1b.firebaseapp.com",
  databaseURL: "https://todo-react-app-3bd1b.firebaseio.com",
  projectId: "todo-react-app-3bd1b",
  storageBucket: "todo-react-app-3bd1b.appspot.com",
  messagingSenderId: "1090595515751",
  appId: "1:1090595515751:web:106b359e456f93231893c2",
});

const db = firebaseApp.firestore();

export { db };

