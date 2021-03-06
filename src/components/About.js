import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/core';
import React from 'react';

function About() {
  return (
    <Box
      margin="auto"
      paddingTop={6}
      paddingBottom={[4, 8]}
      px={['30px', '30px', '60px', '110px']}
    >
      <Image
        src="../assets/hero-img.png"
        alt="hero image"
        objectFit="cover"
        height="300px"
      />

      <SimpleGrid
        textAlign="left"
        color="#002240"
        spacing={8}
        paddingTop={[4, 4, 10]}
        columns={[1, 1, 2, 2]}
      >
        <Box>
          <Heading fontSize={['2xl', '2xl', '2xl', '3xl']} lineHeight="100%">
            A future where AI and humans work hand in hand
          </Heading>
        </Box>

        <Box
          fontSize={['sm', 'sm', 'md']}
          lineHeight={['24px', '24px', '32px']}
        >
          <Text paddingBottom={6}>
            At Saleswhale, we believe that the future of work is Collaborative
            Intelligence - where machines and AI help humans fulfil their
            highest potential by automating drudgery and producing for more
            effective results.
          </Text>
          <Text paddingBottom={6}>
            AI assistants help to automate repetitive and mundane tasks so that
            us humans focus on creative, high-impact work that creates value and
            inspires. The result? Happier and more productive teams doing
            meaningful work.
          </Text>
          <Text paddingBottom={6}>
            Our mission is to put an AI assistant in every company that could
            greatly benefit from it, and we're starting off strong addressing
            this need in marketing and sales teams all across the world.
          </Text>
          <Text paddingBottom={6}>
            The future is where AI and humans work hand in hand, and we’re here
            to help businesses benefit from that.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default About;
