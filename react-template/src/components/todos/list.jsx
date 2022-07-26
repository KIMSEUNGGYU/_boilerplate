import Item from './item';

export default function List({ todos, onDeleteItem, onUpdateItem }) {
  return (
    <ul>
      {todos.map((item) => (
        <Item //
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </ul>
  );
}
