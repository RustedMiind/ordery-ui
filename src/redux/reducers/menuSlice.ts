import { createSlice } from "@reduxjs/toolkit";

export interface MenuStateType {
  menuItems: null | MenuItemType[];
}

const initialState: MenuStateType = {
  menuItems: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenuItems: (state, action) => {
      state.menuItems = action.payload.data;
    },
  },
});

export type MenuItemType = {
  image: string;
  categories: string[];
  _id: string;
  name: string;
  description: string;
  price: number;
};

export const { addMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
