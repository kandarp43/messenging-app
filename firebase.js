import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBv8Dw3l3YdkeiXEGgJ9ibdU61VIhdb-YM',
  authDomain: 'messenging-43.firebaseapp.com',
  projectId: 'messenging-43',
  storageBucket: 'messenging-43.appspot.com',
  messagingSenderId: '724330152835',
  appId: '1:724330152835:web:f516a3755d7196bbed2cb6',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()
const auth = app.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
