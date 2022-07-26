import styled from '@emotion/styled';

export default function Item({ item: todoItem, onDeleteItem, onUpdateItem }) {
  return (
    <Wrapper //
      key={todoItem.key}
      onClick={() => onUpdateItem(todoItem.id)}
    >
      <div //
        className="remove"
        onClick={() => onDeleteItem(todoItem.id)}
      >
        ×
      </div>
      <div className={`todo-text ${todoItem.done ? 'checked' : ''}`}>{todoItem.text}</div>
      <div className={todoItem.done ? 'check-mark' : ''}></div>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #e6f7ff;

    .remove {
      opacity: 1;
    }
  }

  & + & {
    border-top: 1px solid #f1f3f5;
  }

  .remove {
    margin-right: 1rem;
    color: #e64980;
    font-weight: 600;
    opacity: 0;
  }

  .todo-text {
    flex: 1 1;
    word-break: break-all;
    text-align: start;
  }
  .todo-text.checked {
    text-decoration: line-through;
    color: #adb5bd;
  }

  .check-mark {
    font-size: 1.5rem;
    line-height: 1rem;
    margin-left: 1rem;
    color: #1890ff;
    font-weight: 800;
  }
  .check-mark::before {
    content: '✓';
  }
`;
