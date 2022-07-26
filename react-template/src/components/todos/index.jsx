import styled from '@emotion/styled';

import Header from './header';
import Appender from './appender';
import List from './list';

export default function Todos({ todos, onAddItem, onDeleteItem, onUpdateItem }) {
  return (
    <Wrapper>
      <Header />
      <Appender onAddItem={onAddItem} />
      <List //
        todos={todos}
        onDeleteItem={onDeleteItem}
        onUpdateItem={onUpdateItem}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 512px;
`;
