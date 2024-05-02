import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main.tsx';
import Nav from './components/Main/Nav.tsx';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        {}
      </Routes>
    </Router>
  );
}

export default App;
