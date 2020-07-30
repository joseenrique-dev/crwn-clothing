export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }]
}

export const removeItemFromCard = (cartItems, currentItemToRemove) => {
  const existingCardItem = cartItems.find(
    (cartItem) => cartItem.id === currentItemToRemove.id
  )

  if (existingCardItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== currentItemToRemove.id
    )
  }
  return cartItems.map((cartItem) =>
    cartItem.id === currentItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
