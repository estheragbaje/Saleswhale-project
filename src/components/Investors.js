import { Box, SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import OfficeCard from './common/OfficeCard';
import Subheading from './common/Subheading';

function Investors() {
  return (
    <Box
      paddingY={16}
      textAlign={['left', 'left', 'center', 'center']}
      backgroundImage="url(./assets/Vector18_bg_image.png)"
      backgroundSize="cover"
      backgroundPosition=" 0 "
    >
      <Box
        backgroundImage="url(./assets/Vector20_bg_image.png)"
        backgroundRepeat="no-repeat"
        zIndex="2"
        backgroundPosition="right"
      >
        <Box px={['30px', '30px', '60px', '110px']} textAlign="center">
          <Subheading children="Our Investors" />
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={20} paddingTop="27px">
            <OfficeCard logo="../assets/YC logo 2.svg" />
            <OfficeCard logo="../assets/MHV-logo 2.svg" />
            <OfficeCard logo="../assets/STRIVE_logo 2.svg" />
            <OfficeCard logo="../assets/wavemaker-350 2.svg" />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default Investors;
