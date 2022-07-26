import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './couter';
import todosReducer from './todos';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

export default store;
