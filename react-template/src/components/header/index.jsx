import { NavLink } from 'react-router-dom';

import * as S from './style';

// ❓︎ THINK-GYU: 해당 형태가 components 에 있는게 맞을까?
// 컨테이너에서 처리하도록 해야할까??

export default function Header() {
  return (
    <S.Wrapper>
      <nav>
        <ul>
          <li>
            <NavLink //
              to="/"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink //
              to="/todos"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink //
              to="/counter"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Counter
            </NavLink>
          </li>
        </ul>
      </nav>
      <S.Divider />
    </S.Wrapper>
  );
}
