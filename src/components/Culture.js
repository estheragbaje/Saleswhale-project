import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/core';
import CultureCard from './common/CultureCard';

function Culture() {
  return (
    <Box paddingY={8} textAlign={['left', 'left', 'center', 'center']}>
      <Heading fontSize={['xl', '2xl', '3xl']}>Our Culture</Heading>
      <Text color="#537089" paddingTop="27px" fontSize={['sm', 'sm', 'lg']}>
        At Saleswhale, we encourage everyone to grow and innovate, while having
        fun in the process.
      </Text>
      <CultureCard
        headline="Building for the future"
        children="We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users."
      />
    </Box>
  );
}

export default Culture;
