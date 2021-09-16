
const UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS';

const INITIAL_STATE = {
     collections: null
}



const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_COLLECTIONS : 
        return {
            ...state,
            collections: action.payload
        }
        default:
            return state
    }
}


export const updateCollections = collectionMap => ({ type: UPDATE_COLLECTIONS, payload:collectionMap })

export default shopReducer;