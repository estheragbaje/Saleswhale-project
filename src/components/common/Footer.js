import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/core';
import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { LogoIcon } from './Logo';
import SocialLink from './SocialLink';

export function FooterHeading({ title }) {
  return (
    <Heading color="#002240" fontSize={['sm', 'sm', 'md']}>
      {title}
    </Heading>
  );
}

export function FooterText({ children }) {
  return (
    <Text color="#002240" fontSize={['sm', 'sm', 'md']} py={2}>
      {children}
    </Text>
  );
}
export function WhySaleswhale({ ...rest }) {
  return (
    <Box {...rest}>
      <FooterHeading title="Why Saleswhales" />
      <FooterText children="Collaborative Intelligence" />
      <FooterText children="AI Assistant Capabilities" />
      <FooterText children="Customer Stories" />
      <FooterText children="Use Case - Technology" />
      <FooterText children="Use Case - Education" />
      <FooterText children="Use Case - Events" />
    </Box>
  );
}

export function Product({ ...rest }) {
  return (
    <Box {...rest}>
      <FooterHeading title="Product" />
      <FooterText children="AI Conversations" />
      <FooterText children="Lead Enrichment" />
      <FooterText children="Deal Intelligence" />
      <FooterText children="Workflow Integration" />
    </Box>
  );
}

export function Company({ ...rest }) {
  return (
    <Box {...rest}>
      <FooterHeading title="Company" />
      <FooterText children="About us" />
      <FooterText children="Blog" />
      <FooterText children="Resources" />
      <FooterText children="Careers" />
      <FooterText children="Help Centre" />
    </Box>
  );
}

export function Contact({ ...rest }) {
  return (
    <Box {...rest}>
      <Box paddingBottom={4}>
        <FooterHeading title="Contact" />
        <FooterText children="hello@saleswhale.com" />
      </Box>
      <Box paddingBottom={4}>
        <FooterHeading title="US Office" />
        <FooterText children="1701 Rhode Island Ave NW Washington, DC 20036" />
      </Box>
      <Box paddingBottom={4}>
        <FooterHeading title="Singapore Office" />
        <FooterText children="155B Telok Ayer Street Singapore, 068611" />
      </Box>
    </Box>
  );
}

export function TopFooter() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      py={16}
      direction={['column', 'column', 'row', 'row']}
    >
      <LogoIcon minWidth={['100px', '100px', '200px', '200px']} />
      <SimpleGrid columns={[2, 2, 4]} spacing={8} maxWidth="800px">
        <WhySaleswhale />
        <Product />
        <Company />
        <Contact />
      </SimpleGrid>
    </Flex>
  );
}

export function BottomFooter() {
  return (
    <Flex
      bg="#F4F4F4"
      padding={12}
      justifyContent="space-between"
      alignItems="center"
      height="240px"
      direction={['column-reverse', 'column-reverse', 'row', 'row']}
    >
      <Box textAlign={['center', 'center', 'left', 'left']}>
        <FooterHeading title="Privacy Terms" />
        <FooterText
          py={12}
          fontSize="14px"
          children="© 2020 Saleswhale, Inc. All rights reserved."
        />
      </Box>
      <SimpleGrid listStyleType="none" columns={3} spacing={16}>
        <SocialLink
          icon={FaFacebook}
          label="facebook"
          link="#"
          color="#35589D"
        />
        <SocialLink icon={FaTwitter} label="twitter" link="#" color="#5DA8DC" />
        <SocialLink
          icon={FaLinkedin}
          label="linkedin"
          link="#"
          color="#337BB1"
        />
      </SimpleGrid>
    </Flex>
  );
}
