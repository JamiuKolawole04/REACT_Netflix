import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyA4tjEpTgR6DkzPenadM6BpEQmPKxPSeMw",
  authDomain: "netflix-clone-react-a4cdb.firebaseapp.com",
  databaseURL: "https://netflix-clone-react-a4cdb.firebaseio.com",
  projectId: "netflix-clone-react-a4cdb",
  storageBucket: "netflix-clone-react-a4cdb.appspot.com",
  messagingSenderId: "281848483553",
  appId: "1:281848483553:web:b6811d44761ac1cea131a0"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
