import React from 'react'
import {
  Box,
  Flex,
  Stack,
  Text,
  Link,
  Icon,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  UseDisclosureReturn
} from "@chakra-ui/react";
import HeaderLinks from "./HeaderLinks";

type teste = UseDisclosureReturn

const DrawerBar= ({isOpen, onClose, onOpen, onToggle}: teste) => {
  


  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={() => {
        onClose();
      }}
    >
      <DrawerOverlay>
        <DrawerContent bg="gray.100">
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <HeaderLinks></HeaderLinks>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default DrawerBar