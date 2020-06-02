import { Box, SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import OfficeCard from './common/OfficeCard';
import Subheading from './common/Subheading';

function Investors() {
  return (
    <Box
      paddingY={16}
      textAlign={['left', 'left', 'center', 'center']}
      backgroundImage="url(./assets/Vector3_investors_bg.png)"
      backgroundSize="cover"
      backgroundPosition=" 0 "
    >
      <Box px={['30px', '30px', '60px', '110px']} textAlign="center">
        <Subheading children="Our Investors" />
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={20} paddingTop="40px">
          <OfficeCard logo="../assets/YC_logo_2.png" />
          <OfficeCard logo="../assets/MHV-logo2.png" />
          <OfficeCard logo="../assets/STRIVE_logo2.png" />
          <OfficeCard logo="../assets/wavemaker-350_2.png" />
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Investors;
