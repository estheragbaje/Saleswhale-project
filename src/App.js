import { Box } from '@chakra-ui/core';
import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/common/Header';

function App() {
  return (
    <Box px="110px">
      <Header />
      <About />
    </Box>
  );
}

export default App;
