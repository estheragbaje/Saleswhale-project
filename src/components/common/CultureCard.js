import React from 'react';
import { Box, Image, Heading, Text, PseudoBox } from '@chakra-ui/core';

function CultureCard({ headline, children }) {
  return (
    <PseudoBox
      as="article"
      textAlign="left"
      backgroundRepeat="no-repeat"
      borderRadius="5px"
      padding={8}
      bg="white"
      border="1px solid #E5E5E5"
      boxShadow="0px 10px 40px rgba(0, 0, 0, 0.08)"
    >
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
    </PseudoBox>
  );
}

export default CultureCard;
