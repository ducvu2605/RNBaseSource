import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

const exampleReducer = slice.reducer;

export default exampleReducer;
