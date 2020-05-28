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
        px={12}
      >
        <Box minWidth="100px">
          <Text fontSize="26px" color="#0688FA" fontWeight="700">
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
            height="110px"
            borderWidth="4px"
            borderColor="#0688FA"
          />
          <ProgressIcon width="80px" marginTop="-8px" />
        </Stack>
        <Text fontSize="26px" color="#002240" fontWeight="500">
          {children}
        </Text>
      </Flex>
    </Box>
  );
}

export default ProgressItem;
