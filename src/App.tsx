import { useState } from 'react';

import { Button } from '@/shared/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button onClick={() => setCount(count + 1)}>Click me {count}</Button>
    </div>
  );
}

export default App;
