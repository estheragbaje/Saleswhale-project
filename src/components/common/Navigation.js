import React from 'react';
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/core';
import { AiOutlineMenu } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { LogoIcon } from './Logo';
import { CustomButton } from './CustomButton';

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
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={['30px', '30px', '60px', '110px']}
      >
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

              <CustomButton
                children="Log In"
                variant="outline"
                borderColor="#0688FA"
                _hover={{ bg: '#64B4FA' }}
                _focus="blue.800"
                size="lg"
                width="100%"
                height={['36px', '36px', '48px']}
              />
              <CustomButton
                children="Get a Demo"
                bg="#0688FA"
                variant="solid"
                borderColor="#0688FA"
                _hover={{ bg: '#64B4FA' }}
                _focus="blue.800"
                size="lg"
                width="full"
                height={['36px', '36px', '48px']}
              />
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              mr={2}
              onClick={onClose}
              variantColor="red"
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export function NavigationText({ children, href }) {
  return (
    <Link href={href}>
      <Text color="#002240" fontWeight="700" fontSize="md">
        {children}
      </Text>
    </Link>
  );
}

export function DesktopNavigation() {
  return (
    <Box
      py={8}
      px={['30px', '30px', '60px', '110px']}
      position="sticky"
      top="0"
      zIndex={1}
      bg="white"
      // boxShadow="0px 10px 40px rgba(0, 0, 0, 0.06)"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <LogoIcon minWidth="200px" />
        <SimpleGrid columns={3} spacing={12} textAlign="center">
          <NavigationText href="#">Why Saleswhale?</NavigationText>
          <NavigationText href="#">Product</NavigationText>
          <NavigationText href="#">Company</NavigationText>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={4}>
          <CustomButton
            children="Log In"
            variant="outline"
            borderColor="#0688FA"
            _hover={{ bg: '#64B4FA' }}
            _focus="blue.800"
            size="lg"
            height={['36px', '36px', '48px']}
          />
          <CustomButton
            children="Get a Demo"
            bg="#0688FA"
            variant="solid"
            borderColor="#0688FA"
            _hover={{ bg: '#64B4FA' }}
            _focus="blue.800"
            size="lg"
            height={['36px', '36px', '48px']}
          />
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

/**
 *Utilised React responsive library to feature desktop nav and mobile nav at the necessary screen sizes
 */

function Navigation() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return isTabletOrMobile ? <MobileNavigation /> : <DesktopNavigation />;
}

export default Navigation;
