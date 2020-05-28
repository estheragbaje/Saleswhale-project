import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/core';
import OfficeCard from './common/OfficeCard';

function Offices() {
  return (
    <Box paddingY={16} textAlign={['left', 'left', 'center', 'center']}>
      <Heading fontSize={['xl', '2xl', '3xl']} color="#002240">
        Our Offices
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing={20} paddingTop="27px">
        <OfficeCard
          location="Singapore"
          address="155B Telok Ayer Street Singapore, 068611"
        />
        <OfficeCard
          location="Washington DC"
          address="1701 Rhode Island Ave NW Washington, DC 20036"
        />
      </SimpleGrid>
    </Box>
  );
}

export default Offices;
