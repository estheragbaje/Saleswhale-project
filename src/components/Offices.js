import { Box, SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import OfficeCard from './common/OfficeCard';
import SubHeading from './common/Subheading';

function Offices() {
  return (
    <Box
      paddingY={[4, 8, 20]}
      backgroundImage="url(./assets/Vector2_offices_.png)"
      backgroundSize="cover"
      backgroundPosition=" 0 100px"
      backgroundRepeat="repeat-x"
      textAlign="center"
    >
      <Box px={['30px', '30px', '60px', '110px']}>
        <SubHeading children="Our Offices" />
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={16} paddingTop="40px">
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
    </Box>
  );
}

export default Offices;
