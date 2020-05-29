import { Box, Button, SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import SubHeading from './common/Subheading';

function Future() {
  return (
    <Box bg="#329DFA" mx={[0, 0, 12, 12]}>
      <Box p={8}>
        <SubHeading
          children="See the future"
          textAlign="center"
          color="white"
        />
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          spacing={8}
          py={8}
          maxWidth="500px"
          margin="auto"
        >
          <Button variantColor="gray" size="lg">
            Get a Demo
          </Button>
          <Button variantColor="gray" variant="outline" size="lg" color="white">
            Read use cases
          </Button>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Future;
