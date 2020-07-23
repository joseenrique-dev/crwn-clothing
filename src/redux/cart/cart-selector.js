import { createSelector } from 'reselector'

const selectCart = (state) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulateQuantity, cartItem) => accumulateQuantity + cartItem.quantity,
      0
    )
)
