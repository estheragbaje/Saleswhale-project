import { Box, Heading, Stack, Divider } from '@chakra-ui/core';
import React from 'react';
import ProgressItem from './common/ProgressItem';
import SubHeading from './common/Subheading';

function Progress() {
  return (
    <Box paddingY={16} textAlign="center" px={['0px', '0px', '60px', '110px']}>
      <SubHeading children="Our Progress" />
      <Stack bg="#EFF8FF" textAlign="center" marginTop="27px">
        <ProgressItem
          year="2015"
          children="Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong"
        />

        <ProgressItem
          year="2016"
          children="Accepted into Y Combinator (S16) and moved to San Francisco"
        />
        <ProgressItem
          year="2017"
          children="Raised US$1.2M in seed funding and hired core engineers"
        />
        <ProgressItem
          year="2018"
          children="Raised US$5.3M in Series A and expanded team size"
        />
        <ProgressItem
          year="2019"
          children="Opened US office in Washington, DC and hired US sales team"
        />
        <ProgressItem
          year="2020"
          children="Founded in Singapore by Gabriel Lim, Ethan Le, and Venus Wong"
        />
        <Box
          marginLeft={['120px', '113px', '117px', '245px']}
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
        </Box>
      </Stack>
    </Box>
  );
}

export default Progress;
