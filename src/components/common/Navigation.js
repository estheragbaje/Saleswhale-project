import React from 'react';
import { Box, SimpleGrid, Text, Button, Flex } from '@chakra-ui/core';
import { LogoIcon } from './Logo';

export function NavigationText({ children }) {
  return (
    <Text color="#002240" fontWeight="700" fontSize="md">
      {children}
    </Text>
  );
}

function Navigation() {
  return (
    <Box py={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <LogoIcon width="200px" />
        <SimpleGrid columns={3} spacing={12} textAlign="center">
          <NavigationText>Why Saleswhale?</NavigationText>
          <NavigationText>Product</NavigationText>
          <NavigationText>Company</NavigationText>
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

export default Navigation;
