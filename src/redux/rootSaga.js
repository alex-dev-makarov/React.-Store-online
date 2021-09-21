import {all, call} from 'redux-saga/effects'

import { shopSaga} from './shopDataReducer/shopDataReducer'

import { userSaga } from './userReducer/userReducer'
import { cartSaga } from './cart-reducer/cart-reducer'

export default function* rootSaga () {
    yield all([
        call(shopSaga),
        call(userSaga),
        call(cartSaga)
    ])
}