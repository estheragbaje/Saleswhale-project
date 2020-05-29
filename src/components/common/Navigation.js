import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/core';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { LogoIcon } from './Logo';

function MobileNavLink({ children, ...rest }) {
  return (
    <Box {...rest}>
      <Link my={4} href="#">
        {children}
      </Link>
      <Divider />
    </Box>
  );
}

export function MobileNavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <LogoIcon alt="logo" minWidth="120px" />
        <Button variantColor="white" onClick={onOpen}>
          <Box as={AiOutlineMenu} size="30px" color="black" />
        </Button>
      </Flex>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <LogoIcon alt="logo" maxWidth="140px" margin="auto" />
          </DrawerHeader>
          <DrawerBody>
            <Stack textAlign="center" fontWeight="700" spacing={6}>
              <MobileNavLink children="Why Saleswhale?" />
              <MobileNavLink children="Company" />
              <MobileNavLink children="Product" />

              <Button variant="outline" variantColor="blue">
                Log In
              </Button>
              <Button variant="solid" variantColor="blue">
                Get a Demo
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export function NavigationText({ children }) {
  return (
    <Text color="#002240" fontWeight="700" fontSize="md">
      {children}
    </Text>
  );
}

export function DesktopNavigation() {
  return (
    <Box py={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <LogoIcon minWidth="200px" />
        <SimpleGrid columns={3} spacing={12} textAlign="center">
          <NavigationText>Why Saleswhale?</NavigationText>
          <NavigationText>Product</NavigationText>
          <NavigationText>Company</NavigationText>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={4}>
          <Button variant="outline" variantColor="blue">
            Log In
          </Button>
          <Button variant="solid" variantColor="blue">
            Get a Demo
          </Button>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

function Navigation() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return isTabletOrMobile ? <MobileNavigation /> : <DesktopNavigation />;
}

export default Navigation;
