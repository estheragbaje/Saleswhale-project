import { Box, SimpleGrid, Text } from '@chakra-ui/core';
import React from 'react';
import CultureCard from './common/CultureCard';
import { CustomButton } from './common/CustomButton';
import SubHeading from './common/Subheading';

function Culture() {
  return (
    <Box
      paddingY={[4, 8, 16]}
      textAlign={['left', 'left', 'center', 'center']}
      px={['30px', '30px', '60px', '110px']}
      backgroundImage="url(./assets/culture_bg_.png)"
    >
      <SubHeading children="Our Culture" />
      <Text
        color="#537089"
        paddingTop="27px"
        fontSize={['sm', 'sm', 'sm', 'lg']}
      >
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
        {/* <Button
          variantColor="blue"
          size="lg"
          width={['full', '240px', '240px']}
        >
          Join the team
        </Button> */}
        <CustomButton
          children="Join the Team"
          bg="#0688FA"
          variant="solid"
          borderColor="#0688FA"
          _hover={{ bg: '#64B4FA' }}
          _focus="blue.800"
          height="60px"
          px={['20px', '20px', '30px']}
          size="2xl"
          fontSize={['sm', 'sm', 'md']}
          width={['full', 'full', '300px', '300px']}
        />
      </Box>
    </Box>
  );
}

export default Culture;
