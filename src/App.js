import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <h1>Hello world</h1>
    </Router>
  );
}

export default App;
