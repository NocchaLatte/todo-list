import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>To-Do List</h1>
      <button style={themeButtonStyle}>🌙</button> {/* Placeholder for theme switcher */}
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#282c34',
  color: 'white',
};

const themeButtonStyle = {
  fontSize: '20px',
  cursor: 'pointer',
};

export default Header;