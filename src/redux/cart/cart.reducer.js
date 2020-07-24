import CartActionTypes from './cart.types'
import { addItemToCart, removeItemFromCard } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
  //addItemToCart(state.cartItems, action.payload)
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id != action.payload.id
        ),
      }
    case CartActionTypes.REMOVE_ITEM:
      console.log('STATE-->', state)
      return {
        ...state,
        cartItems: removeItemFromCard(state.cartItems, action.payload),
      }

    default:
      return state
  }
}

export default cartReducer
