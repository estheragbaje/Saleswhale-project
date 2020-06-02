import React from 'react';
import { Box, Flex, Stack, Divider, Text } from '@chakra-ui/core';
import { ProgressIcon } from './ProgressIcon';

function ProgressItem({ year, children, ...rest }) {
  return (
    <Box {...rest}>
      <Flex
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        textAlign="left"
        px={12}
      >
        <Box maxWidth="100px">
          <Text
            fontSize={['sm', 'sm', '2lg', '2lg']}
            color="#0688FA"
            fontWeight="700"
          >
            {year}
          </Text>
        </Box>

        <Stack
          left="170px"
          right="auto"
          z-index="10"
          alignItems="center"
          paddingLeft="20px"
        >
          <Divider
            orientation="vertical"
            opacity="1"
            minHeight="120px"
            borderWidth="4px"
            borderColor="#0688FA"
          />
          <ProgressIcon width="80px" marginTop="-8px" />
        </Stack>
        <Box px={2}></Box>
        <Box maxWidth="600px">
          <Text
            fontSize={['sm', 'sm', 'lg', '2lg']}
            color="#002240"
            fontWeight="700"
            textAlign="left"
          >
            {children}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default ProgressItem;
