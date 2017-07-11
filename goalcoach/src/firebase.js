import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDWhKAshkk4wMuCbQQFiVpXueo3OYrvokk",
    authDomain: "goalcoach-34127.firebaseapp.com",
    databaseURL: "https://goalcoach-34127.firebaseio.com",
    projectId: "goalcoach-34127",
    storageBucket: "",
    messagingSenderId: "1057168718097"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalsBase = firebase.database().ref('Goals');
  export const compeletedGoalsBase = firebase.database().ref('CompletedGoals');