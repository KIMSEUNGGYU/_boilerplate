import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
};

const { actions, reducer } = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
  },
});

// export actions
export const { increment, decrement } = actions;

// thunk actions

// export reducer
export default reducer;
