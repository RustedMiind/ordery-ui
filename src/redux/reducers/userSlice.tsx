import { createSlice } from "@reduxjs/toolkit";

export interface UserStateType {
  user: null | UserType;
}

const initialState: UserStateType = {
  user: null,
};

export const menuSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoggedIn: (state, { payload }) => {
      state.user = {
        fName: payload.userData.fName,
        lName: payload.userData.lName,
        _id: payload.userData._id,
        address: payload.userData.address,
        city: payload.userData.city,
        phone: payload.userData.phone,
      };
    },
    setUserLoggedOut: (state) => {
      state.user = null;
    },
  },
});

export type UserType = {
  _id: string;
  fName: string;
  lName: string;
  phone: string;
  address: string;
  city: string;
};

export const { setUserLoggedIn, setUserLoggedOut } = menuSlice.actions;
export default menuSlice.reducer;
