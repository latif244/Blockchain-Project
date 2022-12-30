import React, { useState } from 'react';
import Sidebar from './Sidebar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div className={darkMode ? 'dark-mode' : ''} >
      </div>
    </div>
  );
}

export default App;
