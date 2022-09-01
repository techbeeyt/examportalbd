import { createSlice } from "@reduxjs/toolkit";
import { posts } from './../utils/defaultData';
const initialState ={
  posts
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addHeart: (state, action) => {
      const objIndex = state.posts.findIndex(dt => (dt.id === action.payload));
      state.posts[objIndex]["heart"]++;
    }
  }
});

export const { addHeart } = postSlice.actions;
export default postSlice.reducer;