import React from 'react';
import { Box } from '@chakra-ui/core';
import './App.css';
import About from './components/About';
import Navigation from './components/common/Navigation';
import Culture from './components/Culture';
import Progress from './components/Progress';
import Offices from './components/Offices';
import Investors from './components/Investors';
import Future from './components/Future';
import { TopFooter, BottomFooter } from './components/common/Footer';
import OfficeInvestor from './components/common/OfficeInvestor';

function App() {
  return (
    <Box>
      <Box>
        <Navigation />
        <About />
        <Culture />
      </Box>
      <Box>
        <Progress />
      </Box>
      <Box>
        <Offices />
        <Investors />
        {/* <OfficeInvestor /> */}
      </Box>

      <Box px="60px">
        <Future />
      </Box>
      <Box px="110px">
        <TopFooter />
      </Box>
      <BottomFooter />
    </Box>
  );
}

export default App;
