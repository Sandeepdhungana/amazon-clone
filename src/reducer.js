export const initialState = {
  basket: [],
  user:null
};

// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(state.basket.length);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index);
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(index);
        // console.warn(
        //   `Cannot remove the item with item id ${action.id} as it is unavailabe in the basket`
        // );
      }
      return {
        ...state,
        basket: newBasket,
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default reducer;
