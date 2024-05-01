import {createSlice} from '@reduxjs/toolkit';
import exampleActions from './actions';

const initialState = {
  loading: false,
};

export const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(exampleActions.showExampleLog1, (state, {payload}) => {
      console.log('Hello Example Reducer 1 ', state, payload);
    });
  },
});

const exampleReducer = slice.reducer;

export default exampleReducer;
