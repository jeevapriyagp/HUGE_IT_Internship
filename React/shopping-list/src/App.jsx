import { useState } from 'react';
import Header from './components/Header';
import LoginMessage from './components/LoginMessage';
import ShoppingList from './components/ShoppingList';
import './App.css';

function App() 
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn((prev) => !prev);

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />

      {/* checks whether the user is logged in and displays the shopping list or login message */}
      {isLoggedIn ? <ShoppingList /> : <LoginMessage />} 
    </div>
  );
}

export default App;
