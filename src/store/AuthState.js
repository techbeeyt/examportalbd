import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null
}

const authStateSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setUser: (state, action) => {
        localStorage.setItem(JSON.stringify(action.payload));
        state.user = action.payload;
      },
      removeUser: (state) => {
        localStorage.removeItem("user");
        state.user = null;
      }
    },
  }
);

export const { setUser, removeUser } = authStateSlice.actions;
export default authStateSlice.reducer;
