import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/core';
import OfficeCard from './common/OfficeCard';

function Investors() {
  return (
    <Box paddingY={16} textAlign={['left', 'left', 'center', 'center']}>
      <Heading fontSize={['xl', '2xl', '3xl']} color="#002240">
        Our Investors
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={20} paddingTop="27px">
        <OfficeCard logo="../assets/YC logo 2.png" />
        <OfficeCard logo="../assets/MHV-logo 2.svg" />
        <OfficeCard logo="../assets/STRIVE_logo 2.svg" />
        <OfficeCard logo="../assets/wavemaker-350 2.svg" />
      </SimpleGrid>
    </Box>
  );
}

export default Investors;
