import { firestore, convertCollectionData } from "../../firebase/firebase.utils"
import { takeLatest, call, put, all } from 'redux-saga/effects'


const FETCH_COLLECTION_START = 'FETCH_COLLECTION_START'
const FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS'
const FETCH_COLLECTION_FAILURE = 'FETCH_COLLECTION_FAILURE'

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}



const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }
        case FETCH_COLLECTION_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}


export const fetchCollectionStart = () => ({
    type: FETCH_COLLECTION_START
})

export const fetchCollectionSuccess = (collectionMap) => ({
    type: FETCH_COLLECTION_SUCCESS,
    payload: collectionMap
})


export const fetchCollectionError = (errorMessage) => ({
    type: FETCH_COLLECTION_FAILURE,
    errorMessage
})

// //THUNK
// export const fetchCollectionStartAsync = () => {
//     return dispatch => {
//         // const collectionRef = firestore.collection("collections");
//         dispatch(fetchCollectionStart())
//         collectionRef.get().then((snapshot) => {
//             const collectionMap = convertCollectionData(snapshot);
//             dispatch(fetchCollectionSuccess(collectionMap));
//         }).catch(error => dispatch(fetchCollectionError(error.message)))
//     }
// }


// SAGA
export function* fetchCollectionsAsync() {
try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get()
    const collectionMap = yield call(convertCollectionData, snapShot)
    yield put(fetchCollectionSuccess(collectionMap))
} catch (error) {
    yield put(fetchCollectionError(error.message))
}
}

export function* fetchCollectionsStart() {
    yield takeLatest(FETCH_COLLECTION_START, 
        fetchCollectionsAsync )
}

export function* shopSaga() {
    yield all([
        call(fetchCollectionsStart)
    ])
}
export default shopReducer;