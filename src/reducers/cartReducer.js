export default function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const hasCurrentDishInCart = state.dishes.find(dish => dish.id === action.dish.id)
      let newDishes = []
      if (hasCurrentDishInCart) {
        newDishes = state.dishes.map(dish => {
          if (dish.id !== action.dish.id) {
            return dish
          } else {
            return {
              ...dish,
              quantity: dish.quantity + 1
            }
          }
        })
      } else {
        newDishes = [...state.dishes, { ...action.dish, quantity: 1 }]
      }
      return {
        ...state,
        dishes: newDishes,
        totalPrice: state.totalPrice + action.dish.price,
        quantity: state.quantity + 1
      }
      break

    case 'REMOVE_FROM_CART':
      const { quantity } = state.dishes.find(dish => dish.id === action.payload.id)

      return {
        ...state,
        dishes: state.dishes.filter(dish => dish.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.price * quantity,
        quantity: state.quantity - quantity
      }

      break

    default:
      return state
  }
}
