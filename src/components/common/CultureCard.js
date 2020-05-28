import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/core';

function CultureCard({ headline, children }) {
  return (
    <Box textAlign="left">
      <Image src="../assets/you_glasses 8.png" alt={headline} size="80px" />
      <Heading fontSize="lg" py={5}>
        {headline}
      </Heading>
      <Text
        color="#537089"
        fontSize={['sm', 'sm', 'md']}
        lineHeight={['tall', 'tall', 'taller']}
      >
        {children}
      </Text>
    </Box>
  );
}

export default CultureCard;
