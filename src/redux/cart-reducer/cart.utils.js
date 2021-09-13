export const addItemToCard = (cartItems, cartItemToAdd) => {
    const existingCardItems = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCardItems) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemCart = (cartItems, removeCartToItem) => {
    
    const existingCardItems = cartItems.find(
        cartItem => cartItem.id === removeCartToItem.id)

        if (existingCardItems.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== removeCartToItem.id)
        }


        return cartItems.map(cartItem => cartItem.id === removeCartToItem.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem)
}