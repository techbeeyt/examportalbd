import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  success: false,
  error: false,
  message: '',
}

export const getData = createAsyncThunk(
  'loaddata/getData', () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then( res => res.data);
  })

const dataSlice = createSlice({
  name: 'loaddata',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true
    }).addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
      console.log("action.payload");
      console.log(action.payload)
      state.loading = false;
      state.success = true;
    })
  }
});

export default dataSlice.reducer;
