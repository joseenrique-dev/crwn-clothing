import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCgCftdcT4DpfUjNp9mMvAR7zDAUZ8DDOA',
  authDomain: 'crwn-db-833d2.firebaseapp.com',
  databaseURL: 'https://crwn-db-833d2.firebaseio.com',
  projectId: 'crwn-db-833d2',
  storageBucket: 'crwn-db-833d2.appspot.com',
  messagingSenderId: '747127260809',
  appId: '1:747127260809:web:679f901584fb231fc52858',
  measurementId: 'G-2K7SWZ006Y',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInGoogle = () => auth.signInWithPopup(provider)

export default firebase
