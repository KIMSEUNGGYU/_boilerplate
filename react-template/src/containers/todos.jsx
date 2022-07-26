import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadTodos, createItem, removeItem, updateItem, setTodos } from '../modules/todos';

import * as storage from '../services/storage';

import Todos from '../components/todos';

export default function TodosContainer() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    const todos = storage.getItem('todos');
    if (!todos) {
      dispatch(loadTodos());
      return;
    }

    dispatch(setTodos(todos));
  }, [dispatch]);

  const handleAddItems = (itemText) => {
    dispatch(
      createItem({
        id: Date.now(),
        text: itemText,
        done: false,
      }),
    );
  };

  const handleDeleteItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleUpdateItem = (itemId) => {
    dispatch(updateItem(itemId));
  };

  if (todos.length === 0) {
    return null;
  }

  return (
    <Todos //
      todos={todos}
      onAddItem={handleAddItems}
      onDeleteItem={handleDeleteItem}
      onUpdateItem={handleUpdateItem}
    />
  );
}
