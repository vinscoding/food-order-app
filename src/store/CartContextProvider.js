import React, { useReducer } from "react";
import cartContext from "./cart-context";

function reducer(state, action) {
  if (action.type === "ADD") {
    const existingItemIndex = state.findIndex(
      (item) => item.id === action.items.id
    );

    if (existingItemIndex >= 0) {
      const newItemArray = state.slice();
      //----------note this is a wrong way of assignimg a value to object property, this is inducing bugs in the app-----------------
      // newItemArray[existingItemIndex].quantity =
      //   Number(newItemArray[existingItemIndex].quantity) +
      //   Number(action.items.quantity);
      newItemArray[existingItemIndex] = {
        ...newItemArray[existingItemIndex],
        quantity:
          Number(newItemArray[existingItemIndex].quantity) +
          Number(action.items.quantity),
      };
      return newItemArray;
    }

    return state.concat(action.items);
  }
  if (action.type === "REMOVE") {
    const existingItemIndex = state.findIndex((item) => item.id === action.id);

    if (existingItemIndex >= 0) {
      const newItemArray = state.slice();

      if (Number(newItemArray[existingItemIndex].quantity) > 1) {
        newItemArray[existingItemIndex] = {
          ...newItemArray[existingItemIndex],
          quantity: Number(newItemArray[existingItemIndex].quantity) - 1,
        };
        return newItemArray;
      }
      return newItemArray.filter((item) => item.id !== action.id);
    }
  }
}
export default function Cartcontextprovider(props) {
  const [cartState, dispatchCartAction] = useReducer(reducer, []);

  function addItemsHandler(item) {
    dispatchCartAction({ type: "ADD", items: item });
  }
  console.log(cartState);

  function removeItemsHandler(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  const cartCtx = {
    addedItem: cartState,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };
  return (
    <cartContext.Provider value={cartCtx}>
      {props.children}
    </cartContext.Provider>
  );
}
