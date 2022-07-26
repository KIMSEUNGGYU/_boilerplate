import { useRef } from 'react';

import styled from '@emotion/styled';

export default function Appender({ onAddItem }) {
  const ref = useRef();

  const handleClick = (event) => {
    event.preventDefault();

    const value = ref.current.value;

    if (value !== '') {
      onAddItem(value);
      ref.current.value = '';
    }
  };

  return (
    <Form>
      <input type="text" autoFocus ref={ref} />
      <button onClick={handleClick}>추가</button>
    </Form>
  );
}

const Form = styled.form`
  padding: 1rem;
  display: flex;
  height: 70px;
  border-bottom: 1px solid #69c0ff;

  input {
    flex: 1 1;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #91d5ff;
  }
  button {
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    background-color: #1890ff;
    border-radius: 3px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }
`;
