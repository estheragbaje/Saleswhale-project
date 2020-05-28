import React from 'react';
import { Box, Heading, Text, SimpleGrid, Button } from '@chakra-ui/core';
import CultureCard from './common/CultureCard';

function Culture() {
  return (
    <Box paddingY={16} textAlign={['left', 'left', 'center', 'center']}>
      <Heading fontSize={['xl', '2xl', '3xl']} color="#002240">
        Our Culture
      </Heading>
      <Text color="#537089" paddingTop="27px" fontSize={['sm', 'sm', 'lg']}>
        At Saleswhale, we encourage everyone to grow and innovate, while having
        fun in the process.
      </Text>
      <SimpleGrid columns={[1, 1, 3, 3]} spacing={12} paddingY={[8, 8, 16, 20]}>
        <CultureCard
          headline="Building for the future"
          children="We always challenge the status quo and work hard innovating on a product that not only works, but changes the game for our users."
        />
        <CultureCard
          headline="Promoting trust & transparency"
          children="We remain completely open, honest and transparent with everyone. This has allowed us to build strong relationships with each other."
        />
        <CultureCard
          headline="Achieving our very best"
          children="We believe the success of the company lies within our employees and we constantly challenge each other to learn and level up."
        />
      </SimpleGrid>
      <Box>
        <Text fontSize={['sm', 'sm', 'lg']} color="#002240" marginBottom="32px">
          If you are excited by our vision of the future, and want to solve
          meaningful problems, talk to us!
        </Text>
        <Button
          variantColor="blue"
          size="lg"
          width={['full', '240px', '240px']}
        >
          Join the team
        </Button>
      </Box>
    </Box>
  );
}

export default Culture;