import CartTypes from './cart.types'
import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
})
