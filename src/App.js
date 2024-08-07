import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div id="app">
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
