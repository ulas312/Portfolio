import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
    // fontSize: 25,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<HeroSection />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
