import { addItemToCard, removeItemCart } from './cart.utils'


const TOGGLE_CARD_HIDDEN = 'TOGGLE_CARD_HIDDEN';
const ADD_CART = 'ADD_CART';
const REMOVE_ITEM_CART = 'REMOVE_ITEM_CART';
const REMOVE_ITEM = 'REMOVE_ITEM'

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
        default:
            return state

    }
}

export const setDropdown = () => ({ type: TOGGLE_CARD_HIDDEN })
export const addItem = (item) => ({ type: ADD_CART, item })
export const removeCart = (item) => ({ type: REMOVE_ITEM_CART, item })
export const removeItemFromCart = (item) => ({ type: REMOVE_ITEM, item })

export default cartReducer;