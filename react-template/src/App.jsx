import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CounterPage from './pages/CouterPage';
import TodosPage from './pages/TodosPage';

import DefaultLayout from './layouts/default';

function App() {
  return (
    <div>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </DefaultLayout>
    </div>
  );
}

export default App;
