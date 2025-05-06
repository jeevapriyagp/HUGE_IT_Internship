import './App.css';
import ToggleMessage from './ToggleMessage';

function App() // App component
{
  return (
    <div className="App">
      <h1>Welcome to My React App using Vite</h1>
      <ToggleMessage /> {/* component nested inside the main app component*/}
    </div>
  );
}

export default App;
