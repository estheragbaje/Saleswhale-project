import React from 'react';
import { Heading } from '@chakra-ui/core';

function SubHeading({ children, ...rest }) {
  return (
    <Heading fontSize={['xl', 'xl', '2xl', '3xl']} color="#002240" {...rest}>
      {children}
    </Heading>
  );
}

export default SubHeading;
