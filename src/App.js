import { Box } from '@chakra-ui/core';
import React from 'react';
import './App.css';
import About from './components/About';
import Navigation from './components/common/Navigation';

function App() {
  return (
    <Box px="110px">
      <Navigation />
      <About />
    </Box>
  );
}

export default App;
