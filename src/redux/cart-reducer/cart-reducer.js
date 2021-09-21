import { all, call, takeLatest, put } from 'redux-saga/effects';
import { addItemToCard, removeItemCart } from './cart.utils'

import { userActionTypes }   from '../userReducer/userReducer'

const TOGGLE_CARD_HIDDEN = 'TOGGLE_CARD_HIDDEN';
const ADD_CART = 'ADD_CART';
const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CART_CLEAR = 'CART_CLEAR';

const Initial_State = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case TOGGLE_CARD_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_CART:
            return {
                ...state,
                cartItems: addItemToCard(state.cartItems, action.item)
            }
        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem !== action.item)
            }
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemCart(state.cartItems, action.item)
            }
        case CART_CLEAR:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state

    }
}

export const setDropdown = () => ({ type: TOGGLE_CARD_HIDDEN })
export const addItem = (item) => ({ type: ADD_CART, item })
export const removeCart = (item) => ({ type: REMOVE_ITEM_CART, item })
export const removeItemFromCart = (item) => ({ type: REMOVE_ITEM, item })
export const clearCart = () => ({ type: CART_CLEAR })

//SAGA 


export function* signOutClearSuccess() {
    yield put(clearCart())
}

export function* onSignOutCart() {
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, signOutClearSuccess)
}

export function* cartSaga() {
    yield all([call(onSignOutCart)])

}
export default cartReducer;