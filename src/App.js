import React from 'react';
import { Box } from '@chakra-ui/core';
import './App.css';
import About from './components/About';
import Navigation from './components/common/Navigation';
import Culture from './components/Culture';
import Progress from './components/Progress';
import Offices from './components/Offices';

function App() {
  return (
    <Box px="110px">
      <Navigation />
      <About />
      <Culture />
      <Progress />
      <Offices />
    </Box>
  );
}

export default App;
