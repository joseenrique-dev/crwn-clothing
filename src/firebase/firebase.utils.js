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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`/users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  console.log(snapShot)

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  console.log('TRANSFORM COLLECTION-->', transformCollection)
  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInGoogle = () => auth.signInWithPopup(provider)

export default firebase
