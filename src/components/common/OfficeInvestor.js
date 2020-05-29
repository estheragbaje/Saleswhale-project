import { Box } from '@chakra-ui/core';
import React from 'react';
import Investors from '../Investors';
import Offices from '../Offices';

function OfficeInvestor() {
  return (
    <Box
      backgroundImage="url(./assets/Vector19_bg_image.png)"
      backgroundSize="cover"
      backgroundPosition=" 0 300px"
      backgroundRepeat="repeat-x"
    >
      <Box px={['30px', '30px', '60px', '110px']}>
        <Offices />
        <Investors />
      </Box>
    </Box>
  );
}

export default OfficeInvestor;
