import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  activeMenuItem: string;
}
const initialState: InitialState = { activeMenuItem: "" };

export const menuItemsSlice = createSlice({
  name: "menuItems",
  initialState: initialState,
  reducers: {
    setActiveMenuItem: (state, action: PayloadAction<string>) => {
      state.activeMenuItem = action.payload;
    },
  },
});

export const { setActiveMenuItem } = menuItemsSlice.actions;

export default menuItemsSlice.reducer;
