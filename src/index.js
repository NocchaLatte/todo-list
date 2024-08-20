import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This is where you can import your global CSS styles if needed
import App from './App'; // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
