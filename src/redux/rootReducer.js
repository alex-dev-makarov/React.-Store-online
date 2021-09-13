import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from "./userReducer/userReducer";
import cartReducer from './cart-reducer/cart-reducer';
import direcroryReducer from './directoryReducer/directoryReducer';
import shopReducer from './shopDataReducer/shopDataReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: direcroryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);