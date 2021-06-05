import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/messaging'


var firebaseConfig = {
  apiKey: "AIzaSyCtO2sWx959u8GphQBtTf93y5tO8dbUK1g",
  authDomain: "datatodolist.firebaseapp.com",
  projectId: "datatodolist",
  storageBucket: "datatodolist.appspot.com",
  messagingSenderId: "909713527882",
  appId: "1:909713527882:web:83eca90a36abe08cd002b3",
  measurementId: "G-TJ4M5SWXPK"
};
firebase.initializeApp(firebaseConfig);

export async function registration(email, password) {
  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
    console.log(data.user.uid)
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export async function newClient(newClinet) {
  try {
    const addClient = await firebase.database().ref('clients').push(newClinet)
    console.log(addClient)
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

export async function loadClietsList(user, data) {
  try {
    const query_clientsList = await firebase.database().ref(data).once('value');
    const clientsList = query_clientsList.val();
    console.log(clientsList);
  } catch (error) {
    console.log(error.message)
    throw error
  }
}
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.6.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.6.3/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

// Install Firebase CLI
// To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

// Run the following npm command to install the CLI or update to the latest CLI version.
// npm install -g firebase-tools