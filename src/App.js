import { Box } from '@chakra-ui/core';
import React from 'react';
import './App.css';
import About from './components/About';
import { BottomFooter, TopFooter } from './components/common/Footer';
import Navigation from './components/common/Navigation';
import Culture from './components/Culture';
import Future from './components/Future';
import Investors from './components/Investors';
import Offices from './components/Offices';
import Progress from './components/Progress';

function App() {
  return (
    <Box>
      <Box>
        <Navigation />
        <About />
        <Culture />
        <Progress />
        <Offices />
        <Investors />
        <Future />
        <TopFooter />
        <BottomFooter />
      </Box>
    </Box>
  );
}

export default App;
