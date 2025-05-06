import { useState } from 'react';

function ToggleMessage() // creating a button component that can be added to the app
{
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(prev => !prev);
  };

  return (
    <div>
      <button onClick={toggleMessage}>
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      {showMessage && <p>Hello! This is your message.</p>}
    </div>
  );
}

export default ToggleMessage;
