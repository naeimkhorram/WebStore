import React, { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  total: 0,
  checkout: false,
};

const totalItems = items => {
  const itemCounter = items.reduce((total , product) => total + product.quantity , 0)
  /* 
    The product is a function that contains the objects of the selectedItems array,  
    and the total receives a new content that the starting content is 0,
    the first time that the user clicks on one the items in the shop the product quantity will 
    gather by 0 and the new number will be in the product then product will give it new quantity 
    to total and then total will have a new value , the selectedItems will update its value too.
    For example if the id of the selected item is 2 , then 2 will gather with 0 and the sum will be 2,
    then the new value => 2 , will replace in total. And in the end all of the selected items will 
    return to itemCounter.
  */

    const total = items.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2)
    /*
    total function will multiply the total price of more that one 1 item , quantity will be 
    multiply by the price of each item
    */

    return { itemCounter , total }
}

const cartReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case "AddItem":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...totalItems(state.selectedItems),
        //By spreading the totalItems , the state will be saved and the new states will appear with it
        checkout: false
        /*
        If we set the checkout to be false as the default then the program will run correctly
        when we clear everything and add some items again but if we don't set the checkout as
        false as default then the Checked out successfully message will show up every time you clear
        and add a item
        */
      };
    case "RemoveItem":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...totalItems(newSelectedItems)
      };
    case "Increase":
      const indexA = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexA].quantity++;
      return {
        ...state,
        ...totalItems(state.selectedItems)
      };
    case "Decrease":
      const indexB = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexB].quantity--;
      return {
        ...state,
        ...totalItems(state.selectedItems)
      };
    case "CheckOut":
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    case "Clear":
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
        return state
  }
};

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
        <CartContext.Provider value={{ state , dispatch }}>
           {children}
        </CartContext.Provider> 
  )
};

export default CartContextProvider;
