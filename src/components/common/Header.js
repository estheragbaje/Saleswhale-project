import React from 'react';
import { Box, SimpleGrid, Text, Button, Flex } from '@chakra-ui/core';
import { LogoIcon } from './Logo';

export function HeaderText({ children }) {
  return (
    <Text color="#002240" fontWeight="700" fontSize="18px">
      {children}
    </Text>
  );
}

function Header() {
  return (
    <Box py={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <LogoIcon width="200px" />
        <SimpleGrid columns={3} spacing={12} textAlign="center">
          <HeaderText>Why Saleswhale?</HeaderText>
          <HeaderText>Product</HeaderText>
          <HeaderText>Company</HeaderText>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={4}>
          <Button variant="outline" variantColor="blue">
            Log In
          </Button>
          <Button variantColor="blue">Get a Demo</Button>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

export default Header;
