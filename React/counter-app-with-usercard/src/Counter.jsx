import React, { useState } from 'react';
import './Counter.css';

// creating the counter app
function Counter() 
{
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
