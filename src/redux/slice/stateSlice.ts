import { createSlice } from "@reduxjs/toolkit";

interface StateState {
  WebTitle: string;
  WebTitleScrollStatus: boolean;
  ss?: {};
}

const initialState: StateState = {
  WebTitle: "酒店项目管理系统",
  WebTitleScrollStatus: false,
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    changeWebTitle: (state, action) => {
      state.WebTitle = action.payload;
    },
    changeWebTitleScrollStatus: (state) => {
      state.WebTitleScrollStatus = !state.WebTitleScrollStatus;
    },
  },
});

export const { changeWebTitle, changeWebTitleScrollStatus } =
  stateSlice.actions;

export default stateSlice.reducer;
