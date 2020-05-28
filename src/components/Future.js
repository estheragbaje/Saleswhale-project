import React from 'react';
import { Box, Heading, Button, SimpleGrid } from '@chakra-ui/core';

function Future() {
  return (
    <Box bg="#329DFA">
      <Box padding={24}>
        <Heading
          fontSize={['28px', '28px', '48px']}
          color="white"
          textAlign={['left', 'left', 'center', 'center']}
        >
          See the future
        </Heading>
        <SimpleGrid columns={[1, 1, 2, 2]} spacing={8} py={8}>
          <Button variantColor="gray" size="lg">
            Get a Demo
          </Button>
          <Button variantColor="gray" variant="outline" size="lg">
            Read use cases
          </Button>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Future;
