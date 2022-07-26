import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 0,
  // diffNumber: 1,
};
//
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
// export const { setTags, setSelectedTag, setPosts, setSeries, setPost, setIsLogin } = actions;

export const { increment, decrement } = actions;

// thunk actions
export function incrementThunk() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment());
    }, 500);
  };
}

export function decrementThunk() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(decrement());
    }, 500);
  };
}

// export reducer
export default reducer;
