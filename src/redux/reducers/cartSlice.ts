import { createSlice } from "@reduxjs/toolkit";

export interface CartStateType {
  cartItems: CartItemType[];
}

const initialState: CartStateType = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state: CartStateType, action) => {
      if (
        !state.cartItems.length ||
        (Array.isArray(state.cartItems) &&
          !isNestedIn(state.cartItems, "_id", action.payload.card._id))
      ) {
        state.cartItems.push({
          _id: action.payload.card._id,
          name: action.payload.card.name,
          price: action.payload.card.price,
          amount: 1,
          image: action.payload.card.image,
        });
      }
    },
    itemIncrement: (state: CartStateType, action) => {
      state.cartItems.forEach((item) => {
        if (item._id === action.payload._id && item.amount < 9) {
          item.amount += 1;
        }
      });
    },
    itemDecrement: (state: CartStateType, action) => {
      state.cartItems.forEach((item, index, array) => {
        if (item._id === action.payload._id) {
          if (item.amount > 1) {
            item.amount -= 1;
          } else if (item.amount === 1) {
            array.splice(index, 1);
          }
        }
      });
    },
    itemRemove: (state: CartStateType, action) => {
      state.cartItems.forEach((item, index, array) => {
        if (item._id === action.payload._id && item.amount >= 0) {
          array.splice(index, 1);
        }
      });
    },
  },
});

export type CartItemType = {
  _id: string;
  name: string;
  image: string;
  price: number;
  amount: number;
};

export const { addItemToCart, itemIncrement, itemDecrement, itemRemove } =
  cartSlice.actions;
export default cartSlice.reducer;

export function isNestedIn(array: any[], propertyName: string, value: any) {
  let isIn = false;
  Array.isArray(array) &&
    array.length &&
    array.forEach((item) => {
      if (item[propertyName] === value) {
        isIn = true;
      }
    });
  return isIn;
}
