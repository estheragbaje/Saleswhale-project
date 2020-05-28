import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/core';

function OfficeCard({ location, address, logo, name, ...rest }) {
  return (
    <Box
      {...rest}
      textAlign="center"
      bg="white"
      border="1px solid #E5E5E5"
      borderRadius="5px"
      padding={12}
      boxShadow="0px 10px 40px rgba(0, 0, 0, 0.08)"
    >
      {logo ? (
        <Image src={logo} alt={name} />
      ) : (
        <Box>
          <Image
            src="../assets/sinon 9.png"
            alt="sinon"
            marginLeft="auto"
            marginRight="auto"
          />
          <Heading fontSize={['2lg', '2lg', '2xl']} paddingY={4}>
            {location}
          </Heading>
          <Text
            fontSize={['sm', 'sm', 'md']}
            lineHeight={['tall', 'tall', 'taller']}
          >
            {address}
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default OfficeCard;
