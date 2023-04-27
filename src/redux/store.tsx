import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./reducers/menuSlice";
import cartSlice from "./reducers/cartSlice";
import userSlice from "./reducers/userSlice";

export const store = configureStore({
  reducer: { menu: menuSlice, cart: cartSlice, user: userSlice },
});
