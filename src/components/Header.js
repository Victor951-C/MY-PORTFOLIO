import React from 'react';

function Header({ toggleTheme }) {
  return (
    <header>
      <h1>VICTOR ADEMEFUN</h1>
      <button onClick={toggleTheme} className="theme-toggle">Toggle Theme</button>
    </header>
  );
}

export default Header;
