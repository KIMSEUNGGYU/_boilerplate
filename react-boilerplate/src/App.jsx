import CounterPage from './pages/CouterPage';

import DefaultLayout from './layouts/default';

function App() {
  return (
    <div>
      <DefaultLayout>
        <CounterPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
