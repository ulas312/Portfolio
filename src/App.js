import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#EDE3DF',
    },
    secondary: {
      main: '#0A0A0A',
    },
    background: {
      default: '#0A0A0A',
      paper: '#EDE3DF',
    },
    text: {
      primary: '#EDE3DF',
    },
  },
  typography: {
    fontFamily: '"Bebas Neue", "Aleo", "Helvetica", "Arial", sans-serif',
    fontSize: 25,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroSection />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
