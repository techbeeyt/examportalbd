import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginForm: {
    email: "",
    password: "",
  }
}

const formStateSlice = createSlice({
  name: "formstate",
  initialState,
  reducers: {
    setLoginForm: (state, action) => {
      state.loginForm = action.payload;
    },
  },
  extraReducers: null,
})

export const { setLoginForm } = formStateSlice.actions;

export default formStateSlice.reducer;
