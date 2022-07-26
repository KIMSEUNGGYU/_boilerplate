import { createSlice } from '@reduxjs/toolkit';

import * as storage from '../services/storage';

import * as api from '../services/apis/todo';

const initialState = {
  todos: [],
};

//
const { actions, reducer } = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, { payload: todos }) {
      return {
        ...state,
        todos,
      };
    },
    addItem(state, { payload: item }) {
      return {
        ...state,
        todos: state.todos.concat(item),
      };
    },
    deleteItem(state, { payload: itemId }) {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== itemId),
      };
    },
    updateItem(state, { payload: todoItem }) {
      return {
        ...state,
        todos: state.todos.map((item) => {
          return item.id === todoItem.id //
            ? todoItem
            : item;
        }),
      };
    },
  },
});

// export actions
export const { setTodos, addItem, deleteItem } = actions;

// thunk actions
export function loadTodos() {
  return async (dispatch) => {
    const todos = await api.getTodos();

    dispatch(setTodos(todos));

    storage.setItem('todos', todos);
  };
}

export function createItem(item) {
  return async (dispatch, getState) => {
    const todoItem = await api.createItem(item);

    dispatch(addItem(todoItem));
    storage.setItem('todos', getState().todos.todos);
  };
}

export function removeItem(itemId) {
  return async (dispatch, getState) => {
    await api.removeItem(itemId);

    dispatch(deleteItem(itemId));
    storage.setItem('todos', getState().todos.todos);
  };
}

export function updateItem(itemId) {
  return async (dispatch, getState) => {
    const {
      todos: { todos },
    } = getState();

    let todoItem = todos.find((item) => item.id === itemId);
    if (todoItem) {
      todoItem = {
        ...todoItem,
        done: !todoItem.done,
      };
      const updatedItem = await api.updateItem(todoItem);
      dispatch(actions.updateItem(updatedItem));
      storage.setItem('todos', getState().todos.todos);
    }
  };
}

// export reducer
export default reducer;
