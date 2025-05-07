import React from 'react';
import './App.css';
import UserCard from './UserCard';
import Counter from './Counter';

function App() 
{
  return (
    <div className="app-container">
      <h1>User Cards</h1>

      {/* reusing UserCard Component */}
      <UserCard name="Jane Doe" email="jane@example.com" /> 
      <UserCard name="John Smith" email="john@example.com" />
      <Counter />
    </div>
  );
}

export default App;
