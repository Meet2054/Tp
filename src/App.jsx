import React, { useState } from 'react';
import './App.css';

function App() {
  // State to manage the visibility of the new message
  const [showMessage, setShowMessage] = useState(false);

  const goToHome = () => {
    // Update the state to show the message when the button is clicked
    setShowMessage(true);
  };

  return (
    <>
      <div className='bg-green-500'>
        <h1>Wellcome Amod ka hatti</h1>
        <br />
        <h1>And Ananya ka penguin app ko bhi</h1>
        <button onClick={goToHome}>Click Me</button>
        {/* Conditionally render the new message based on the state */}
        {showMessage && (
          <div>
            <h1>Kaam dhandha ani hai kya</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
