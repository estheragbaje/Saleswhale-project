import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/core';

function CultureCard({ headline, children }) {
  return (
    <Box textAlign="left">
      <Image src="../assets/you_glasses 8.png" alt={headline} size="80px" />
      <Heading fontSize={['sm', 'sm', 'sm', 'lg']} py={[2, 2, 4, 4]}>
        {headline}
      </Heading>
      <Text
        color="#537089"
        fontSize={['sm', 'sm', 'sm', 'md']}
        lineHeight={['tall', 'tall', 'taller']}
      >
        {children}
      </Text>
    </Box>
  );
}

export default CultureCard;
