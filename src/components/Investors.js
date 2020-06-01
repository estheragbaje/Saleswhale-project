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
      // width="1532px"
      // height="818px"
      // left="-55px"
      // top="-313px"
      // position="absolute"
      // transform="matrix(1, 0, 0, -1, 0, 0)"
    >
      {/* <Box
        backgroundImage="url(./assets/Vector20_bg_image.png)"
        backgroundRepeat="no-repeat"
        zIndex="2"
        backgroundPosition="right"
        // left="calc(50% - 356px/2 + 499px)"
        // top="131px"
      >
        <Box
          backgroundImage="url(./assets/footer_bg_3.png)"
          backgroundRepeat="no-repeat"
          zIndex="2"
          backgroundPosition="left"
          top="263px"
          // left="calc(50% - 200px/2 - 437x)"
        > */}
      <Box px={['30px', '30px', '60px', '110px']} textAlign="center">
        <Subheading children="Our Investors" />
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={20} paddingTop="40px">
          <OfficeCard logo="../assets/YC logo 2.svg" />
          <OfficeCard logo="../assets/MHV-logo 2.svg" />
          <OfficeCard logo="../assets/STRIVE_logo 2.svg" />
          <OfficeCard logo="../assets/wavemaker-350 2.svg" />
        </SimpleGrid>
      </Box>
    </Box>
    //   </Box>
    // </Box>
  );
}

export default Investors;
