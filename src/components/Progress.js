import { Box, Heading } from '@chakra-ui/core';
import React from 'react';
import ProgressItem from './common/ProgressItem';

function Progress() {
  return (
    <Box paddingY={16} textAlign={['left', 'left', 'center', 'center']}>
      <Heading fontSize={['xl', '2xl', '3xl']} color="#002240">
        Our Progress
      </Heading>
      <Box bg="#EFF8FF">
        <ProgressItem
          year="2015"
          children="Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong"
        />
        
      </Box>
    </Box>
  );
}

export default Progress;
