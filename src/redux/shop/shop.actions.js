import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'
import ShopActionTypes from './shop.types'

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionSuccess = (data) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: data,
})

export const fetchCollectionFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections')

    dispatch(fetchCollectionStart)

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionSuccess(collectionsMap))
        this.setState({ loading: false })
      })
      .catch((error) => dispatch(fetchCollectionFailure(error.message)))
  }
}
