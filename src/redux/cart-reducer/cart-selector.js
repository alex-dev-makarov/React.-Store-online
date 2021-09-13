
import { createSelector } from "reselect";


const selectCart = (state) => state.cart;

export const selectorCartItem = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)


export const selectCartItemCount = createSelector(
    [selectorCartItem],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
)

export const selectTotalCart = createSelector(
    [selectorCartItem],
    cartItems => cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
)